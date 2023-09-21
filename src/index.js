import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCM1p6bpJV_nMs_ko8HN_VNIIz4gf6VzKE",
  authDomain: "gabriel-shulman.firebaseapp.com",
  projectId: "gabriel-shulman",
  storageBucket: "gabriel-shulman.appspot.com",
  messagingSenderId: "660287482125",
  appId: "1:660287482125:web:de0629a34ccffe6642e844"
};

initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
