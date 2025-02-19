import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Cookies from 'js-cookie'
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

const Dashboard = () => {
  //const [tests, setTests] = useState([]);
  const navigate = useNavigate();
  const jwtToken = Cookies.get('jwtToken')

  const handleLogout = () =>{
    Cookies.remove(jwtToken);
    alert('You are logged out.');
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

  const handleStart = () => {
    alert("Click Ok to start your test.\n All the best.")
    navigate(`/test`)
  }

  return (
    <div className="dashboard-con">
      <h1>Available Tests</h1>
      <ul className="lists-con">
        {
          tests.map((item, id) => (
            <li className="test-title" key={id} onClick={() => navigate(`/test`)}>
              <h3>{item.title}</h3>
              <p>Number of Questions : {item.noofquestions}</p>
              <p>Duration : {item.time}</p>
              <p>Click the below start button to write an exam</p>
              <button onClick={handleStart}>Start</button>
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

export default Dashboard;