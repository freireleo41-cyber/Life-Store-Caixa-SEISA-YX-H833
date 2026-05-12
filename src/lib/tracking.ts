import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from './firebase';
import { getUTMs } from './utm';
import { PRODUCT } from '../config/constants';

// Tipos de operação para tratamento de erro customizado
enum OperationType {
  CREATE = 'create',
  UPDATE = 'update',
  DELETE = 'delete',
  LIST = 'list',
  GET = 'get',
  WRITE = 'write',
}

function handleFirestoreError(error: unknown, operationType: OperationType, path: string | null) {
  const errInfo = {
    error: error instanceof Error ? error.message : String(error),
    operationType,
    path
  };
  console.error('Firestore Error: ', JSON.stringify(errInfo));
  throw new Error(JSON.stringify(errInfo));
}

/**
 * Rastreia eventos genéricos no site (ex: visualização de seção)
 */
export const trackEvent = async (event: string, section?: string) => {
  const utms = getUTMs();
  try {
    await addDoc(collection(db, 'site_events'), {
      event,
      section: section || 'general',
      page: window.location.pathname,
      product: PRODUCT.shortName,
      ...utms,
      created_at: serverTimestamp(),
    });
  } catch (error) {
    console.warn('Failed to track event:', error);
  }
};

/**
 * Rastreia cliques em botões e destinos
 */
export const trackClick = async (event: string, buttonLocation: string, destination: string) => {
  const utms = getUTMs();
  try {
    await addDoc(collection(db, 'product_clicks'), {
      event,
      button_location: buttonLocation,
      destination,
      product: PRODUCT.shortName,
      ...utms,
      created_at: serverTimestamp(),
    });
  } catch (error) {
    console.warn('Failed to track click:', error);
  }
};

/**
 * Envia os dados do formulário de atacado para o Firestore.
 * Inclui tratamento para evitar 'undefined' e 'NaN' caso o formulário envie campos com nomes variados.
 */
export const submitWholesaleLead = async (data: any) => {
  const utms = getUTMs();
  const path = 'wholesale_leads';
  
  try {
    // Mapeamento robusto para garantir que os dados entrem corretamente no banco
    const payload = {
      // Tenta pegar o nome de várias chaves possíveis (português/inglês)
      name: String(data.name || data.nome || data.fullName || '').trim(),
      whatsapp: String(data.whatsapp || data.phone || data.telefone || '').trim(),
      email: String(data.email || '').toLowerCase().trim(),
      city: String(data.city || data.cidade || '').trim(),
      state: String(data.state || data.estado || '').trim(),
      
      // Converte para número e garante que se for inválido, salve como 0 para não quebrar a regra
      desired_quantity: Number(data.desired_quantity || data.quantidade || 0) || 0,
      
      customer_type: String(data.customer_type || data.tipo || 'revenda'),
      consent: Boolean(data.consent),
      
      // Informações de produto e metadados
      product: PRODUCT.shortName,
      source: data.source || 'direct',
      status: 'new',
      created_at: serverTimestamp(),
      
      // Injeta as UTMs (campaign, source, medium, etc)
      ...utms,
    };

    // Validação básica pré-envio para evitar lixo no banco
    if (!payload.name && !payload.whatsapp) {
      throw new Error("Campos essenciais vazios. Verifique o mapeamento do formulário.");
    }

    return await addDoc(collection(db, path), payload);
  } catch (error) {
    handleFirestoreError(error, OperationType.WRITE, path);
  }
};