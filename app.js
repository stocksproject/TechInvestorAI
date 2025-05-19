import { auth, db, signInWithEmailAndPassword, createUserWithEmailAndPassword, doc, getDoc, setDoc, updateDoc, arrayUnion } from './firebase-config.js';

export async function login(email, password) {
  try {
    const userCred = await signInWithEmailAndPassword(auth, email, password);
    window.location.href = 'index.html';
  } catch (err) {
    alert(err.message);
  }
}

export async function signup(email, password) {
  try {
    const userCred = await createUserWithEmailAndPassword(auth, email, password);
    await setDoc(doc(db, "users", userCred.user.uid), { portfolio: [] });
    window.location.href = 'index.html';
  } catch (err) {
    alert(err.message);
  }
}

export async function addStockToPortfolio(userId, stockSymbol) {
  const userRef = doc(db, "users", userId);
  await updateDoc(userRef, {
    portfolio: arrayUnion(stockSymbol.toUpperCase())
  });
}

export async function fetchPortfolio(userId) {
  const userRef = doc(db, "users", userId);
  const docSnap = await getDoc(userRef);
  if (docSnap.exists()) {
    return docSnap.data().portfolio || [];
  } else {
    return [];
  }
}