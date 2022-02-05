import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = initializeApp({
    apiKey: "AIzaSyCxX0E2kXwfd6De5TYWQawVKb5Pt8gsGOM",
    authDomain: "instagram-clone-998fd.firebaseapp.com",
    projectId: "instagram-clone-998fd",
    storageBucket: "instagram-clone-998fd.appspot.com",
    messagingSenderId: "11510663900",
    appId: "1:11510663900:web:ad64fc99a66dc024704219"
  });

export const db = getFirestore();