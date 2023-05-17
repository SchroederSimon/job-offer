import { useState } from 'react'
import '../pages/Register.css'
import { createUserWithEmailAndPassword } from "@firebase/auth"
import { auth, db } from "../services/firebase";
import { addDoc, collection } from 'firebase/firestore';

function Register() {
  const [registerEmail, setRegisterEmail] = useState("")
  const [registerPassword, setRegisterPassword] = useState("")

  const handleRegister = async (event) => {
    event.preventDefault();

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword);
      const { user } = userCredential;

      const usersCollectionRef = collection(firestore, 'users');
      await addDoc(usersCollectionRef, { email: user.email });

      console.log(user);
    } catch (error) {
      console.log(error.message);
    }

    // Clear fields
    setRegisterEmail("");
    setRegisterPassword("");
  };

  return (
    <div className="register-container">
      <form className="register-form" onSubmit={handleRegister}>
        <h1>Tell us a little about you</h1>
        <p>This is an initial information of you, you can change it anytime</p>
        <div className="inputs-register">
          <div className="input-row">
            <input type="text" name="email" placeholder="Email..." value={registerEmail} onChange={(event) => setRegisterEmail(event.target.value)} />
            <input type="password" name="password" placeholder="Password..." value={registerPassword} onChange={(event) => setRegisterPassword(event.target.value)} />
          </div>
          <div className="input-row">
            <input type="text" placeholder="Name..." />
            <input type="text" placeholder="Headline..." />
          </div>
          <div className="input-row">
            <input type="text" placeholder="Additional info..." />
          </div>
        </div>
        <button type="submit">Register</button>
      </form>
      <img src="src/assets/register.png" alt="" />
    </div>

  )
}

export default Register
