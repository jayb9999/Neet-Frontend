import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Register from "./components/Register";
import Login from "./components/Login";
import TestInterface from "./components/TestInterface";
import AvailableTests from "./components/AvailableTests";
//import Question from "./components/Question";
//import Results from "./components/Results";
//import AdminPanel from "./components/AdminPanel";
import ProtectedLayout from "./components/ProtectedLayout";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <ToastContainer />
      <div id="main-content">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route element={<ProtectedLayout />}>
            <Route path="/available-tests" element={<AvailableTests />} />
            <Route path="/test" element={<TestInterface />} />
            {/* <Route path="/question/:testId" element={<Question />} />
            <Route path="/results/:userId/:testId" element={<Results />} />
            <Route path="/admin" element={<AdminPanel />} /> */}
          </Route>
        </Routes>
      </Router>
      </div>
    </>
  );
}

export default App;