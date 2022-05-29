// import firebase services
import { app, db, auth, googleProvider } from "../../../lib/firebase";
import {
  signInWithPopup,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
} from "firebase/auth";

// google sign in
const googleSignup = document.getElementById("googleSignup");
const loginWithPopup = document.getElementById("login");
const signup = document.getElementById("signup");

googleSignup.addEventListener("click", (e) => {
  e.preventDefault();
  signInWithPopup(auth, googleProvider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = auth.currentUser;
      console.log("auth", user);
      setToLocal(user);
      window.location.href = "../dashboard/dashboard.html";
      // ...
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...

      alert(errorMessage);
    });
});

let googleLogin = document.getElementById("googleLogin");

function setToLocal(user) {
  localStorage.setItem("user", JSON.stringify(user));
}

googleLogin.addEventListener("click", (e) => {
  e.preventDefault();
  signInWithPopup(auth, googleProvider)
    .then((result) => {
      // The signed-in user info.
      const user = auth.currentUser;
      console.log("auth", user);
      setToLocal(user);
      window.location.href = "../dashboard/dashboard.html";
      // ...
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...

      alert(errorMessage);
    });
});

login.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("clicked");
  const email = document.getElementById("loginEmailInput").value;
  const password = document.getElementById("loginPasswordInput").value;
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = auth.currentUser;
      setToLocal(user);
      window.location.href = "../dashboard/dashboard.html";
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
});

signup.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("clicked");
  const email = document.getElementById("signUpEmailInput").value;
  const password = document.getElementById("signupPasswordInput").value;
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
});
