// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAeeOqFCgg7VJ4E1uQeDK0ak1_ZULEK5yo",
  authDomain: "animepfp-7f3b0.firebaseapp.com",
  projectId: "animepfp-7f3b0",
  storageBucket: "animepfp-7f3b0.firebasestorage.app",
  messagingSenderId: "481700382319",
  appId: "1:481700382319:web:537a44a06f7c276663ef9a",
  measurementId: "G-M2LWCMNBZM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
