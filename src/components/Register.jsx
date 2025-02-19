import React, { useState } from 'react'
//import './SignUp.css'
import './Styles.css'
import { useNavigate } from 'react-router-dom'
import axios from "axios";
//import { signup } from '../../config/firebase'

const Register = () => {
  const [username, setUsername] = useState("");
  //const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    
    // Ensure username and password are not empty
    if (!username || !password) {
      alert('Please provide both username and password');
      return;
    }
  
    try {
      await axios.post("https://neet-backend1.onrender.com/register", {
        username,
        password,
      });
      alert("Registered successfully! Please login.");
      navigate("/login");
    } catch (err) {
      alert(err.response?.data?.error || "An error occurred during registration");
      console.error("Registration error", err);
    }
  };
  

  return (
    <div className='login'>
        <h1>Create Account</h1>
        <form  onSubmit={onSubmitHandler}  action="" className="loginForm">
            <h2>SignUp</h2>
            <input onChange={(e)=>setUsername(e.target.value)} value={username} type="text" placeholder='User Name' className="inputs" required/>
            {/* <input onChange={(e)=>setEmail(e.target.value)} value={email} type="email" placeholder='Email Address' className="inputs" required/> */}
            <input onChange={(e)=>setPassword(e.target.value)} value={password} type="password" placeholder='Password' className="inputs" required/>
            <button type= 'submit' className="btn">Create account</button>
            <div className="obey-terms">
                <input type="checkbox" />
                <p>Agree to the terms of use & privacy policy.</p>
            </div>
            <div className="signup">
                <p className="toggletosignup">Already have an account <span onClick={() => navigate('/login')}>click here</span> to login</p>
            </div>
        </form>
    </div>
  )
}

export default Register

/*import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3000/register", {
        username,
        password,
      });
      navigate("/login");
    } catch (err) {
      console.error("Registration error", err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Register</button>
    </form>
  );
}

export default Register;*/