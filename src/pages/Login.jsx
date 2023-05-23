import '../pages/Login.css'
import { auth } from "../services/firebase";
import { onAuthStateChanged, signOut, signInWithEmailAndPassword } from "@firebase/auth"
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

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

    const login = async (event) => {
        event.preventDefault();
        try {
            const user = await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
            console.log(user);
        } catch (error) {
            console.log(error.message);
        }
    }


    return (
        <>
            <div className="login-container">
                <form className="login-form" onSubmit={login}>
                    <div className="login-title">
                        <h1>Welcome back!</h1>
                        <p>Please enter your login credentials below to get started.</p>
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
                    <div className="login-extras">
                        <Link><span>Forgot password?</span></Link>
                        <Link>Don't have an account? <span>Sign up</span></Link>
                    </div>
                    <div className="login-button">
                        <button type="submit">Login</button>
                    </div>
                </form>
                <h1>uSer liog: {user?.email}</h1>
                    <form onSubmit={logout}>
                        <button type="submit">Log Out</button>
                    </form>
                <div className="login-background">
                    <h1>Discover top talent easily.</h1>
                </div>
            </div>
        </>

    )
}

export default Login
