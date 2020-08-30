import React from 'react';
import './App.css';
import {BrowserRouter,Route,} from 'react-router-dom';
import Navbar from './Components/CommonComponent/Navbar';
const App=()=>{
  return (
        <div>
          <BrowserRouter>
              <Navbar/>   
          </BrowserRouter>
        </div>
  );
}

export default App;
