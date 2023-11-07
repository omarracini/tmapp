// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDWQCw3BINCR18KuwbJH2lM3ko34r_-iE4",
  authDomain: "task-management-e1488.firebaseapp.com",
  projectId: "task-management-e1488",
  storageBucket: "task-management-e1488.appspot.com",
  messagingSenderId: "858308387006",
  appId: "1:858308387006:web:0fc99b0ea3e5811a463eef",
  measurementId: "G-55604C78W3"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const analytics = getAnalytics(app);

