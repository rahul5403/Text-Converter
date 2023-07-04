import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React, { useState } from 'react';
import Alert from './components/Alert'
import About from './components/About';
// import {Routes, Route} from "react-router-dom"
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {

  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  
  const showAlert = (message, type)=>{
    setAlert({ msg: message,
                type: type})
                setTimeout(()=>{
                  setAlert(null);
                },2000)
}

  const toggleMode =()=>{
    if(mode === "dark"){
      setMode("light");
      document.body.style.backgroundColor = 'white';
      showAlert("Dark Mode has been Disabled", "success");
    }
    else{
      setMode("dark");
      document.body.style.backgroundColor = 'rgb(5,30,68)';
      showAlert("Dark Mode has been Enabled", "success");
  }
}




  return (
    // <div>
    // <Navbar random="Best Navbar Ever" mode = {mode} toggleMode={toggleMode}/>
    // <Alert alert={alert}/>
    // <div className="container my-3">
    // <Textform title='Enter the text to analyze' mode = {mode} showAlert = {showAlert}/>
    // <About/>
    // </div>
    // </div>

    // <Routes>
    //   <Route path="/" element={<Navbar random="Best Navbar Ever" mode = {mode} toggleMode={toggleMode}/>}/>
    //   <Route path="/" element={<Textform title='Enter the text to analyze' mode = {mode} showAlert = {showAlert}/>}/>
    //   <Route path="/" element={<About/>}/>
    // </Routes>

    <Router>
        <Navbar random="Best Navbar Ever" mode={mode} toggleMode={toggleMode}/>
        <div className="container my-3">
      <Routes>
        <Route exact path="/" element={<Textform title='Enter the text to analyze' mode={mode} showAlert={showAlert} />} />
        <Route exact path="/about" element={<About />} />
      </Routes>
        </div>
    </Router>
  );
}

export default App;
