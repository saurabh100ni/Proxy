import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  OAuthProvider,
  signInWithRedirect,
  getRedirectResult,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD8j7qesCB9aAvKNt6ikHsKARiO2uZfSkc",
  authDomain: "proxy-e3560.firebaseapp.com",
  databaseURL: "https://proxy-e3560-default-rtdb.firebaseio.com",
  projectId: "proxy-e3560",
  storageBucket: "proxy-e3560.appspot.com",
  messagingSenderId: "907869236844",
  appId: "1:907869236844:web:100e5f6e139cd2c3c3b249",
  measurementId: "G-L3XR168MC0",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
