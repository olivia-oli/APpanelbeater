// src/firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-database.js";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCieFMypUNb34KdDk7-o-m6dAkuphe7CDQ",
  authDomain: "appanelbeater.firebaseapp.com",
  projectId: "appanelbeater",
  storageBucket: "appanelbeater.firebasestorage.app",
  messagingSenderId: "704233703170",
  appId: "1:704233703170:web:91abe134710efd7c1ee41b",
  measurementId: "G-5BWC2KCXSE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// Function to send message to Firebase
export const sendMessage = (formData) => {
  set(ref(db, 'user/' + formData.name), formData);
};
