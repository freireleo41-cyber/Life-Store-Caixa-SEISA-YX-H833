import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from './firebase';
import { getUTMs } from './utm';
import { PRODUCT } from '../config/constants';

// Operation types for custom error
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
    // Silent fail for background tracking but log error
    console.warn('Failed to track event:', error);
  }
};

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

export const submitWholesaleLead = async (data: any) => {
  const utms = getUTMs();
  const path = 'wholesale_leads';
  try {
    return await addDoc(collection(db, path), {
      ...data,
      ...utms,
      product: PRODUCT.shortName,
      status: 'new',
      created_at: serverTimestamp(),
    });
  } catch (error) {
    handleFirestoreError(error, OperationType.WRITE, path);
  }
};
