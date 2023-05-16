import { useState } from 'react'
import '../pages/Register.css'
import { createUserWithEmailAndPassword } from "@firebase/auth"
import { auth } from "../services/firebase";

function Register() {
  const [registerEmail, setRegisterEmail] = useState("")
  const [registerPassword, setRegisterPassword] = useState("")

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword)
      console.log(user)
    } catch (error) {
      console.log(error.message)
    }

  }

  return (
    <>
      <h1>register</h1>
      <input
        type="text"
        name="" id=""
        placeholder='Email...'
        onChange={(event) => { setRegisterEmail(event.target.value) }}
      />
      <input
        type="password"
        name=""
        id=""
        placeholder='Password...'
        onChange={(event) => { setRegisterPassword(event.target.value) }}
      />

      <button onClick={register}>Register</button>

    </>

  )
}

export default Register
