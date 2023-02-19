import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAglX45VBPe8i6--VcbvsY1YXgvYA__rys',
  authDomain: 'fir-9-reading-list-ea490.firebaseapp.com',
  projectId: 'fir-9-reading-list-ea490',
  storageBucket: 'fir-9-reading-list-ea490.appspot.com',
  messagingSenderId: '323386097141',
  appId: '1:323386097141:web:67b68a205f08264590b4bc',
};

// init firebase
initializeApp(firebaseConfig);

// init services
const db = getFirestore();

export { db };
