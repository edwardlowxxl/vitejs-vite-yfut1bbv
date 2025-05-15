import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAImDNn2vqDLUT4Pc1SdC8-lz0NRVFWu1U",
  authDomain: "real-estate-crm-f2795.firebaseapp.com",
  projectId: "real-estate-crm-f2795",
  storageBucket: "real-estate-crm-f2795.appspot.com",
  messagingSenderId: "1012858805043",
  appId: "1:1012858805043:web:c7811f9fbfbf2a10a5ebc46"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
