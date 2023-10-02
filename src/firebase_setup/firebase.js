// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAykqtChGAVDkhzpkc3p4eyb4Q-4AyyY1c",
  authDomain: "certificate-generator-982d1.firebaseapp.com",
  projectId: "certificate-generator-982d1",
  storageBucket: "certificate-generator-982d1.appspot.com",
  messagingSenderId: "425962540885",
  appId: "1:425962540885:web:30587d6afc15662206e9dc",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
