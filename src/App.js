
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from 'react'
import PhoneSignUp from "./components/PhoneSignUp";
import OtpReact from './components/OtpReact';



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
