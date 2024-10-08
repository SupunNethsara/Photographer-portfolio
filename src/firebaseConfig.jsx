// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyAHUDk1qW_8SxqXtd4sLYk22galb2RKzDI",
    authDomain: "photographer-11924.firebaseapp.com",
    projectId: "photographer-11924",
    storageBucket: "photographer-11924.appspot.com",
    messagingSenderId: "789643609181",
    appId: "1:789643609181:web:5549c29755c097232e39b4",
    measurementId: "G-LPFRWLV99G"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
