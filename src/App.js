
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
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'



// let name = "Harry";
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
    }, 2000)

  }

  const  removeBodyClasees=()=> {
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-success')
    document.body.classList.remove('bg-primary')
    

  }


  const toggleMode = (cls) => {
    removeBodyClasees();
    // document.body.classList.add('btn-dark')
    document.body.classList.add('bg-'+cls)

    // if(document.body.style.backgroundColor==='dark'){

    //   document.body.style.color='white'
    // }
    // else{
    //   console.log("body is troble")
    // }
    if (mode === 'dark') {
      console.log("if mode charl gay")
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Dark mode has been enabled", "success")
      // document.title = "TextUtils - LightMode"
    }
     else {
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
            <Route exact path="/about" element={<About mode={mode} />}>



            </Route>
            {/* <TextForm showAlert={showAlert} heading="Enter a text to analyse" mode={mode} /> */}

            <Route exact path="/" element={<TextForm showAlert={showAlert} heading="TextUtils - word Counter , Charcter Counter, Remove extra Spaces" mode={mode} />}>
            </Route>

          </Routes>
        </div>
      </Router>


    </>

);
}

export default App;






