import '../pages/Login.css'
import { auth } from "../services/firebase";
import { onAuthStateChanged, signOut, signInWithEmailAndPassword } from "@firebase/auth"
import React, { useState, useEffect } from 'react';


function Login() {
    const [loginEmail, setLoginEmail] = useState("")
    const [loginPassword, setLoginPassword] = useState("")
    const [user, setUser] = useState({})

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });

        return () => {
            unsubscribe();
        };
    }, []);

    const logout = async () => {
        await signOut(auth)
    }

    const login = async () => {
        try {
            const user = await signInWithEmailAndPassword(auth, loginEmail, loginPassword)
            console.log(user)
        } catch (error) {
            console.log(error.message)
        }

    }
    return (
        <>
                <h1>login</h1>
                <input
                    type="text"
                    name=""
                    id=""
                    placeholder='Email...'
                    onChange={(event) => { setLoginEmail(event.target.value) }}
                />
                <input
                    type="password"
                    name=""
                    id=""
                    placeholder='Password...'
                    onChange={(event) => { setLoginPassword(event.target.value) }}
                />
                <button onClick={login}>Login</button>
            <h1>uSer liog: {user?.email}</h1>
            <button onClick={logout}>Log out</button>

        </>

    )
}

export default Login
