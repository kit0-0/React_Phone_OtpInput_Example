//import { Container, Row, Col } from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from 'react'
import PhoneSignUp from "./components/PhoneSignUp";
import OtpReact from './components/OtpReact';
//import SideBar from './components/Sidebar.jsx'
//import Navigation from "./components/Navigation";

//import "./App.css";


function App() {
  return (

    <Router>
      <PhoneSignUp />

      <Routes>

        <Route path="/OtpReact" element={<OtpReact />} />

      </Routes>


    </Router >

  );
}

export default App;