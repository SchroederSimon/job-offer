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
        <div className="register-title">
          <h1>Tell us a little about you</h1>
          <p>This is an initial information of you, you can change it anytime</p>
        </div>
        <div className="inputs-register">
          <div className="input-row">
            <input type="text" name="email" placeholder="paltamora@gmail.com" value={registerEmail} onChange={(event) => setRegisterEmail(event.target.value)} />
            <input type="password" name="password" placeholder="Password..." value={registerPassword} onChange={(event) => setRegisterPassword(event.target.value)} />
          </div>
          <div className="input-row">
            <input type="text" placeholder="Jon Doe" />
            <input type="text" placeholder="Front-end developer" />
          </div>
          <div className="input-row">
            <input type="text" placeholder="HTML5 - CSS3 - TypeScript - NodeJs..." />
            <select>
              <option value="option1">Trainee</option>
              <option value="option2">Junior</option>
              <option value="option3">Semi-senior</option>
              <option value="option3">Senior</option>
            </select>
          </div>
        </div>
        <div className="register-button">
          <button><strong>Back</strong></button>
          <button type="submit"><strong>Register</strong></button>
        </div>
      </form>
      <img src="src/assets/register.png" alt="" />
    </div>

  )
}

export default Register
