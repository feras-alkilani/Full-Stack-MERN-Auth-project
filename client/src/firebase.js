// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-8f1f7.firebaseapp.com",
  projectId: "mern-auth-8f1f7",
  storageBucket: "mern-auth-8f1f7.firebasestorage.app",
  messagingSenderId: "607815346313",
  appId: "1:607815346313:web:4b724109eddb65887efe58"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
