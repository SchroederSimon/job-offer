import { useState } from 'react'
import '../pages/Register.css'
import { createUserWithEmailAndPassword } from "@firebase/auth"
import { auth, db } from "../services/firebase";
import { addDoc, collection } from 'firebase/firestore';
import { Link, useNavigate  } from "react-router-dom";

function Register() {
  const [registerEmail, setRegisterEmail] = useState("")
  const [registerPassword, setRegisterPassword] = useState("")

  //Form fields
  const [registerName, setRegisterName] = useState("")
  const [registerProfession, setRegisterProfession] = useState("")
  const [registerSkills, setRegisterSkills] = useState("")
  const [registerLevel, setRegisterLevel] = useState("Trainee")


  const handleRegister = async (event) => {
    event.preventDefault();

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword);
      const { user } = userCredential;

      const usersCollectionRef = collection(db, 'users');
      await addDoc(usersCollectionRef, {
        email: user.email,
        name: registerName,
        profession: registerProfession,
        skills: registerSkills,
        level: registerLevel
      });

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
            <input type="text" name="email" placeholder="paltamora@gmail.com"
              value={registerEmail} onChange={(event) => setRegisterEmail(event.target.value)} />
            <input type="password" name="password" placeholder="*********"
              value={registerPassword} onChange={(event) => setRegisterPassword(event.target.value)} />
          </div>

          <div className="input-row">
            <input type="text" placeholder="Jon Doe"
              value={registerName} onChange={(event) => setRegisterName(event.target.value)} />
            <input type="text" placeholder="Front end developer"
              value={registerProfession} onChange={(event) => setRegisterProfession(event.target.value)} />
          </div>

          <div className="input-row">
            <input type="text" placeholder="HTML5 - CSS3 - TypeScript - NodeJs..."
              value={registerSkills} onChange={(event) => setRegisterSkills(event.target.value)} />
            <select
              value={registerLevel} onChange={(event) => setRegisterLevel(event.target.value)}>
              <option value="Trainee">Trainee</option>
              <option value="Junior">Junior</option>
              <option value="Semi-senior">Semi-senior</option>
              <option value="Senior">Senior</option>
            </select>
          </div>
        </div>

        <div className="register-button">
          <Link to={`/`}><button><strong>Back</strong></button></Link>
          <button type="submit"><strong>Register</strong></button>
        </div>
      </form>

      <img src="src/assets/register.png" alt="" />
    </div>

  )
}

export default Register
