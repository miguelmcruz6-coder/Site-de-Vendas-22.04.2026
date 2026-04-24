// FirebaseConfig.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.11.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.11.0/firebase-auth.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/12.11.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyDGaYhT-D76zmg7bjgfkkMKlVt_ePaT4VQ",
  authDomain: "vendas---atividade-sorflecha.firebaseapp.com",
  databaseURL: "https://vendas---atividade-sorflecha-default-rtdb.firebaseio.com",
  projectId: "vendas---atividade-sorflecha",
  storageBucket: "vendas---atividade-sorflecha.firebasestorage.app",
  messagingSenderId: "763881784181",
  appId: "1:763881784181:web:7d5e21c4547dea21ce093c"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getDatabase(app);