import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

/**
 * Configuração central do Firebase utilizando variáveis de ambiente do Vite.
 * O uso de import.meta.env garante que as chaves não fiquem expostas no código-fonte do GitHub.
 */
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID
};

// Inicializa a aplicação Firebase
const app = initializeApp(firebaseConfig);

/**
 * Inicializa o Firestore apontando para o banco de dados específico do AI Studio.
 * Como o seu projeto não utiliza o banco '(default)', passamos o ID mapeado no .env.
 */
export const db = getFirestore(app, import.meta.env.VITE_FIREBASE_DATABASE_ID);

/**
 * Inicializa o serviço de Autenticação
 */
export const auth = getAuth(app);