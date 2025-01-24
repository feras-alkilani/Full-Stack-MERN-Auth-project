// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-71d8a.firebaseapp.com",
  projectId: "mern-auth-71d8a",
  storageBucket: "mern-auth-71d8a.firebasestorage.app",
  messagingSenderId: "777423962951",
  appId: "1:777423962951:web:439d3f4a95f505d22dc262"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
