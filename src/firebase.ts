import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, sendEmailVerification, signOut } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc, updateDoc, arrayUnion } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAGNoGXIo2klfrRUiKyI83kheUoKaf5hqM",
  authDomain: "techinvestorai.firebaseapp.com",
  projectId: "techinvestorai",
  storageBucket: "techinvestorai.appspot.com",
  messagingSenderId: "394407327469",
  appId: "1:394407327469:web:d971c18b8cb047b3dfbee4",
  measurementId: "G-2XL3XXCDEJ"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { 
  auth, 
  db, 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  sendEmailVerification,
  signOut,
  doc, 
  getDoc, 
  setDoc, 
  updateDoc, 
  arrayUnion 
};