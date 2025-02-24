import React, { useEffect, useState } from 'react'
import './Styles.css'
import { useNavigate, Navigate } from 'react-router-dom'
import axios from "axios";
import Cookies from 'js-cookie'
import { toast } from "react-toastify";
//import { signin } from '../../config/firebase'

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    const jwtToken = Cookies.get("jwtToken")
    if (jwtToken) {
      //alert("You are already LoggedIn.\nPlease Click OK to continue");
      toast.success("You are already LoggedIn.")
      navigate("/available-tests");
      return;//<Navigate to="/available-tests" replace />;
    }
  }, [])

  const onSubmitHandler = async (e) => {
    e.preventDefault();
  
    try {
      const res = await axios.post("https://neet-backend1.onrender.com/login", {
        username,
        password,
      });
  
      // Save the JWT token to cookies
      //console.log(res.data)
      Cookies.set('jwtToken', res.data.jwtToken, { expires: 1 });
      //alert("Login Successful");
      toast.success("Login Successful")
  
      // Navigate to the dashboard
      navigate("/available-tests");
    } catch (err) {
      //console.error("Login error", err);
      //alert("Invalid credentials");
      toast.error("Invalid credentials", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
      });
    }
  };
  

  return (
    <div className='login'>
        <h1 className='loginHead'>Sign In</h1>
        <form onSubmit={onSubmitHandler} action="" className="loginForm">
            <h2>LogIn</h2>
            <input onChange={(e)=>setUsername(e.target.value)} value={username} type="text" placeholder='User Name' className="inputs" required/>
            <input onChange={(e)=>setPassword(e.target.value)} value={password} type="password" placeholder='Password' className="inputs" required/>
            <button type= 'submit' className="btn">Login now</button>
            <div className="signup">
                <p className="toggletosignup">Don&#39;t have an account <span onClick={() => navigate('/register')}>click here</span> to create an account</p>
            </div>
        </form>
    </div>
  )
}

export default Login


/*import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3000/login", {
        username,
        password,
      });
      console.log(res.data);
      navigate("/dashboard");
    } catch (err) {
      console.error("Login error", err);
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
      <button type="submit">Login</button>
    </form>
  );
}

export default Login; */