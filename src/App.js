
import './App.css';
import About from './Components/About';
import Alert from './Components/Alert';
import Navbar from "./Components/Navbar";
import TextForm from './Components/TextForm';
import React, { useState } from 'react'
// import {
//   BrowserRouter as Router,
//   Switch,
//   Routes,
//   Link
// } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'



let name = "Harry";
function App() {
  const [mode, setMode] = useState('light');
  const [alert, setalert] = useState(null);

  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setalert(null);
    }, 3000)

  }

  const toggleMode = () => {
    if (mode == 'dark') {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Dark mode has been enabled", "success")
      document.title = "TextUtils - LightMode"
    } else {
      setMode('dark')
      document.body.style.backgroundColor = '#042960'
      showAlert("light mode has been enabled", "success")
      document.title = "TextUtils - DarkMode"

    }

  }

  return (
    <>
      <Router>
        <Navbar title="TextUtils" aboutText="About " mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container">
          <Routes>
            <Route exact path="/about" element={<About />}>


            </Route>



            <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter a text to analyse" mode={mode} />}>

            </Route>
          </Routes>
        </div>
      </Router>


    </>







  );
}

export default App;
