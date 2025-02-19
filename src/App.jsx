import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Register from "./components/Register";
import Login from "./components/Login";
import TestInterface from "./components/TestInterface";
import Dashboard from "./components/Dashboard";
//import Question from "./components/Question";
//import Results from "./components/Results";
//import AdminPanel from "./components/AdminPanel";
import ProtectedLayout from "./components/ProtectedLayout";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route element={<ProtectedLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/test" element={<TestInterface />} />
          {/* <Route path="/question/:testId" element={<Question />} />
          <Route path="/results/:userId/:testId" element={<Results />} />
          <Route path="/admin" element={<AdminPanel />} /> */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;