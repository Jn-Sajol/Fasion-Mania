// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBD_bP3_IMK7cJoTKJr5WwCpwUg25r-JBU",
  authDomain: "fashion-mania-25237.firebaseapp.com",
  projectId: "fashion-mania-25237",
  storageBucket: "fashion-mania-25237.appspot.com",
  messagingSenderId: "578097808428",
  appId: "1:578097808428:web:beb646934b6e0c9229fd89",
  measurementId: "G-HFQP84TP2S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);