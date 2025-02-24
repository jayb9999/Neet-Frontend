import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Cookies from 'js-cookie'
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import './Styles.css'

const tests = [
  {
    id: 1,
    title: 'NEET 2024 R1',
    noofquestions: 200,
    time: 200
  },
  {
    id: 2,
    title: 'NEET 2024 R2',
    noofquestions: 200,
    time: 200
  },
  {
    id: 3,
    title: 'NEET 2024 R3',
    noofquestions: 200,
    time: 200
  },
  {
    id: 4,
    title: 'NEET 2024 R4',
    noofquestions: 200,
    time: 200
  },
  {
    id: 5,
    title: 'NEET 2024 R5',
    noofquestions: 200,
    time: 200
  },
  {
    id: 6,
    title: 'NEET 2024 R6',
    noofquestions: 200,
    time: 200
  },
  {
    id: 7,
    title: 'NEET 2024 R7',
    noofquestions: 200,
    time: 200
  },
  {
    id: 8,
    title: 'NEET 2024 R8',
    noofquestions: 200,
    time: 200
  },
  {
    id: 4,
    title: 'NEET 2024 R4',
    noofquestions: 200,
    time: 200
  },
  {
    id: 5,
    title: 'NEET 2024 R5',
    noofquestions: 200,
    time: 200
  },
  {
    id: 6,
    title: 'NEET 2024 R6',
    noofquestions: 200,
    time: 200
  },
  {
    id: 7,
    title: 'NEET 2024 R7',
    noofquestions: 200,
    time: 200
  },
  {
    id: 8,
    title: 'NEET 2024 R8',
    noofquestions: 200,
    time: 200
  },
]

const AvailableTests = () => {
  //const [tests, setTests] = useState([]);
  const navigate = useNavigate();
  const jwtToken = Cookies.get('jwtToken')

  const showToast = () => {
    // Add overlay when toast appears
    const overlay = document.createElement("div");
    overlay.className = "toast-overlay";
    document.body.appendChild(overlay);
  
    // Disable background interactions
    const mainContent = document.getElementById("main-content"); // The main app container
    if (mainContent) mainContent.classList.add("toast-disable-background");
  
    const toastId = toast.info(
      <div>
        <p>Click OK to start your test.<br />All the best.</p>
        <button
          onClick={() => {
            toast.dismiss(toastId);
            cleanup(); // Restore main content
            setTimeout(() => navigate("/test"), 0);
          }}
          style={{ marginRight: "10px" }}
        >
          OK
        </button>
        <button
          onClick={() => {
            toast.dismiss(toastId);
            cleanup(); // Restore main content
          }}
        >
          Cancel
        </button>
      </div>,
      {
        position: "top-center",
        autoClose: false,
        closeOnClick: false,
        draggable: false,
        onClose: cleanup,
      }
    );

    function cleanup() {
      if (mainContent) mainContent.classList.remove("toast-disable-background");
      if (document.body.contains(overlay)) document.body.removeChild(overlay);
    }
  };

  const handleLogout = () =>{
    Cookies.remove('jwtToken');
    //alert('You are logged out.');
    toast.error("You are logged out.", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "colored",
    });
    navigate('/login');
  }

  if (jwtToken === undefined){
    return 
  }

  // useEffect(() => {
  //   const fetchTests = async () => {
  //     const res = await axios.get("http://localhost:3000/tests");
  //     setTests(res.data);
  //   };
  //   fetchTests();
  // }, []);

  return (
    <div className="dashboard-con">
      <h1>Available Tests</h1>
      <ul className="lists-con">
        {
          tests.map((item, id) => (
            <li className="test-title" key={id}>
              <h3>{item.title}</h3>
              <p>Number of Questions : {item.noofquestions}</p>
              <p>Duration : {item.time}</p>
              <p>Click the below start button to write an exam</p>
              <button onClick={showToast}>Start</button>
            </li>
          ))
        }
        {/* <li className="test-title">
          <h3>NEET 2024 R1</h3>
          <p>Click the below start button to write an exam</p>
          <button onClick={() => navigate(`/test`)}>Start</button>
        </li>
        <li className="test-title">
          <h3>NEET 2024 R1</h3>
          <p>Click the below start button to write an exam</p>
          <button onClick={() => navigate(`/test`)}>Start</button>
        </li>
        {tests.map((test) => (
          <li className="test-title" key={test.id} onClick={() => navigate(`/test/${test.id}`)}>
            {test.title}
          </li>
        ))} */}
      </ul>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default AvailableTests;