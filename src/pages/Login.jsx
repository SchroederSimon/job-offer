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
            <div className="login-container">
                <form className="login-form" onSubmit={login}>
                    <div className="login-title">
                        <h1>Welcome back!</h1>
                    </div>
                    <div className="inputs-login">
                        <div className="input-row">
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
                        </div>
                    </div>
                    <div className="login-button">
                        <button type="submit">Login</button>
                    </div>
                    {/* <h1>uSer liog: {user?.email}</h1>
                    <button onClick={logout}>Log out</button> */}
                </form>
                <img src="src/assets/register.png" alt="" />
            </div>

        </>

    )
}

export default Login
