import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import React from "react";
import './App.css';
import "./sass/app.css";
import Bottom from "./components/bottom/index";
import Top from "./components/top/index";


function App() {
 
  return (
      <div className = "app-container">
        <div className = "main-container">
          <div className='top-section'> 
            <Top /> 
          </div>
          <div className='bottom-section'> <Bottom /> </div>
        </div>
      </div>)
}
    


export default App
