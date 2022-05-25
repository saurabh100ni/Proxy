// import firebase services
import { app, db, auth, googleProvider } from "../../../lib/firebase";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
// create a variable and export it
const x = "xyz";

// google sign in
let googleSignup = document.getElementById("googleSignup");
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
