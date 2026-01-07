import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyCVeFIEU7usiWqTf3T-WRajr_yiLzXS9Sg",
  authDomain: "parroquia-poas.firebaseapp.com",
  projectId: "parroquia-poas",
  storageBucket: "parroquia-poas.appspot.com",
  messagingSenderId: "596282418076",
  appId: "1:596282418076:web:afb6501afd707bbee05e59"
};

const app = initializeApp(firebaseConfig);

// 🔐 AUTH
export const auth = getAuth(app);

// 📦 BASE DE DATOS
export const db = getFirestore(app);

// 📁 ARCHIVOS
export const storage = getStorage(app);
