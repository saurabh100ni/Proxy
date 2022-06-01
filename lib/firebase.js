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
  apiKey: "{put your api key here}",
  authDomain: "{put your auth domain here}",
  databaseURL: "{put your database url here}",
  projectId: "{put your project id here}",
  storageBucket: "{put your storage bucket here}",
  messagingSenderId: "{put your messaging sender id here}",
  appId: "{put your app id here}",
  measurementId: "{put your measurement id here}",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
