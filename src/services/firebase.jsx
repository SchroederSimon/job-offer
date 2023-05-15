import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';


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