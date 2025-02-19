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
  const [check, setCheck] = useState(false)
  const navigate = useNavigate()

  const handleChange = () =>{
    setCheck(true);
  }

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    
    // Ensure username and password are not empty
    if (check){
      if (!username || !password) {
        alert('Please provide both username and password');
        return;
      }
      if (username.length<5){
        alert('User Name should be of atleast 5 characters');
        return;
      }
      if (password.length<8){
        alert('Password should be of atleast 8 characters');
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
    } else{
      alert("Please obey the terms and conditions to proceed")
    }
  };
  

  return (
    <div className='login'>
        <h1>Create Account</h1>
        <form  onSubmit={onSubmitHandler}  action="" className="loginForm">
            <h2>SignUp</h2>
            <div>
              <input onChange={(e)=>setUsername(e.target.value)} value={username} type="text" placeholder='User Name' className="inputs" required/>
              {username.length<5? <p className={`usr ${(username.length===0)? 'usr0':""}`}>User Name should be of atleast 5 characters</p>:null}
            </div>
            {/* <input onChange={(e)=>setEmail(e.target.value)} value={email} type="email" placeholder='Email Address' className="inputs" required/> */}
            <div>
              <input onChange={(e)=>setPassword(e.target.value)} value={password} type="password" placeholder='Password' className="inputs" required/>
              {password.length<8? <p className={`usr ${(username.length===0)? 'usr0':""}`}>Password should be of atleast 8 characters</p>:null}
            </div>
            <button type= 'submit' className="btn">Create account</button>
            <div className="obey-terms">
                <input type="checkbox" onChange={handleChange}/>
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