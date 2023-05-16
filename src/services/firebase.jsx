import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider  } from 'firebase/auth'


const firebaseConfig = {
    apiKey: process.env.API_KEY,
    authDomain: "job-offer-3e072.firebaseapp.com",
    projectId: "job-offer-3e072",
    storageBucket: "job-offer-3e072.appspot.com",
    messagingSenderId: "19718278412",
    appId: process.env.API_APP_ID
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider();