// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCVeFIEU7usiWqTf3T-WRajr_yiLzXS9Sg",
  authDomain: "parroquia-poas.firebaseapp.com",
  projectId: "parroquia-poas",
  storageBucket: "parroquia-poas.firebasestorage.app",
  messagingSenderId: "596282418076",
  appId: "1:596282418076:web:afb6501afd707bbee05e59",
  measurementId: "G-MPVDDL0DN0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);