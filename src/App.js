
//import { useState } from 'react';
import './App.css';
//import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React,{useState} from 'react';
function App() {
  const[mode,setMode]=useState('light');// whether dark mode is enabled or not
  return (
    <>
    <Navbar title="TextUtils" mode={mode}/>
    <div className="container my-3">
      <Textform heading="Enter the text to analyze"/>
    </div>
    </>
  );
}

export default App;
