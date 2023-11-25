// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "@firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDkmw-60pBhL0IbS8d_bcjyLqx_xocFf-w",
  authDomain: "tmapp-c34de.firebaseapp.com",
  projectId: "tmapp-c34de",
  storageBucket: "tmapp-c34de.appspot.com",
  messagingSenderId: "91537935016",
  appId: "1:91537935016:web:bb61f07e1b5706cc4a109d",
  measurementId: "G-M9D3WEGSS0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const analytics = getAnalytics(app);
export const db = getFirestore(app)
