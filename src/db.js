
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDA60I9dkgQ8Y84qM3t_xGlqbxoCArkMWc",
  authDomain: "contact-book-5cecd.firebaseapp.com",
  projectId: "contact-book-5cecd",
  storageBucket: "contact-book-5cecd.firebasestorage.app",
  messagingSenderId: "553829474282",
  appId: "1:553829474282:web:265a86b8c3bc1072e55c93",
  measurementId: "G-Y83CZ70RVZ"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
