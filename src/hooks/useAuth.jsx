import { signInWithPopup, signOut } from "@firebase/auth";
import { auth, googleProvider } from "../services/firebase";


export const handleLogOut = async (event) => {
    event.preventDefault();
    try {
        await signOut(auth);
    } catch (error) {
        console.log(error)
    }
}

export const handleSignInWithGoogle = async (event) => {
    event.preventDefault();
    try {
        await signInWithPopup(auth, googleProvider);
    } catch (error) {
        console.log(error)
    }
}


export function handleAuthStateChange() {
    auth.onAuthStateChanged((user) => {
      if (user) {
        const uid = user.uid;
        console.log(uid);
        // ...
      } else {
        // User is signed out
        // ...
      }
    });
  }