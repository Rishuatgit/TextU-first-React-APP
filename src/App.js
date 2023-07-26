
import './App.css';
import About from './Components/About';
import Alert from './Components/Alert';
import Navbar from "./Components/Navbar";
import TextForm from './Components/TextForm';
import React, { useState } from 'react'




let name = "Harry";
function App() {
  const [mode, setMode] = useState('light');
  const [alert, setalert] = useState(null);

  const showAlert = (message, type) => {
    setalert({
      msg:message,
      type:type
    });

  }

  const toggleMode = () => {
    if (mode == 'dark') {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Dark mode has been enabled","success")
    } else {
      setMode('dark')
      document.body.style.backgroundColor = '#042960'
      showAlert("light mode has been enabled","success")
    }

  }

  return (
    <>
      <Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container">
        <TextForm heading="Enter a text to analyse" mode={mode} />
        <About />
      </div>
    </>







  );
}

export default App;
