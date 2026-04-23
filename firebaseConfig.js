// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDGaYhT-D76zmg7bjgfkkMKlVt_ePaT4VQ",
  authDomain: "vendas---atividade-sorflecha.firebaseapp.com",
  databaseURL: "https://vendas---atividade-sorflecha-default-rtdb.firebaseio.com",
  projectId: "vendas---atividade-sorflecha",
  storageBucket: "vendas---atividade-sorflecha.firebasestorage.app",
  messagingSenderId: "763881784181",
  appId: "1:763881784181:web:7d5e21c4547dea21ce093c",
  measurementId: "G-7T48YE0G58"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const  analytics = getDatabase(app);