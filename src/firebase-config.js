import { initializeApp } from 'firebase/app';
import { getFirestore } from '@firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyB9S_jx2OBBqMrmLrKR_Kq5Z1UE4e-Mr9s',
  authDomain: 'blog-4b2e2.firebaseapp.com',
  projectId: 'blog-4b2e2',
  storageBucket: 'blog-4b2e2.appspot.com',
  messagingSenderId: '1041794126308',
  appId: '1:1041794126308:web:ba466136e873d991c137f1',
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
