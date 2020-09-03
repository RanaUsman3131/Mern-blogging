import React from 'react';
import './App.css';
import {BrowserRouter} from 'react-router-dom';
import Navbar from './Components/CommonComponent/Navbar';
import Router from './Router/Router';
const App=()=>{
  return (
        <div>
          <BrowserRouter>
              <Navbar/>
              <Router/>   
          </BrowserRouter>
        </div>
  );
}

export default App;
