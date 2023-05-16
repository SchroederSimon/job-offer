import '../pages/Login.css'
import { auth } from "../services/firebase";
import { onAuthStateChanged } from "@firebase/auth"
import React, { useState } from 'react';


function Login() {
    // const [loginEmail, setLoginEmail] = useState("")
    // const [loginPassword, setLoginPassword] = useState("")
    const [user, setUser] = useState({})

    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser)
    })

    return (
        <>
            <form action="">
                <h1>login</h1>
                <input
                    type="text"
                    name=""
                    id=""
                    placeholder='Name...'
                    // onChange={(event) => { setLoginEmail(event.target.value) }}
                />
                <input
                    type="password"
                    name=""
                    id=""
                    placeholder='Password...'
                    // onChange={(event) => { setLoginPassword(event.target.value) }}
                />
                <button>Login</button>
            </form>
            <h1>uSer liog: {user.email}</h1>

        </>

    )
}

export default Login
