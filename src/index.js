import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDWQCw3BINCR18KuwbJH2lM3ko34r_-iE4",
  authDomain: "task-management-e1488.firebaseapp.com",
  projectId: "task-management-e1488",
  storageBucket: "task-management-e1488.appspot.com",
  messagingSenderId: "858308387006",
  appId: "1:858308387006:web:0fc99b0ea3e5811a463eef",
  measurementId: "G-55604C78W3"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

