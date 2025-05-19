import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-auth.js";
import { getFirestore, doc, getDoc, setDoc, updateDoc, arrayUnion } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAGNoGXIo2klfrRUiKyI83kheUoKaf5hqM",
  authDomain: "techinvestorai.firebaseapp.com",
  projectId: "techinvestorai",
  storageBucket: "techinvestorai.firebasestorage.app",
  messagingSenderId: "394407327469",
  appId: "1:394407327469:web:d971c18b8cb047b3dfbee4",
  measurementId: "G-2XL3XXCDEJ"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db, signInWithEmailAndPassword, createUserWithEmailAndPassword, doc, getDoc, setDoc, updateDoc, arrayUnion };