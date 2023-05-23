import { useEffect, useState } from 'react'
import '../components/Profile.css'
import { db } from '../services/firebase'
import { collection, getDocs } from 'firebase/firestore'

export default function Profile() {

    const [user, setUser] = useState({})

    const userCollectionRef = collection(db, "users")

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });

        return () => {
            unsubscribe();
        };
    }, []);

    return (
        <>
            <h1>User: {user?.email}</h1>
        </>

    )
}