import React from 'react';
import './App.css';
import Footer from './Components/CommonComponent/Footer';
import {BrowserRouter} from 'react-router-dom';
import Navbar from './Components/CommonComponent/Navbar';
import Router from './Router/Router';
const App=()=>{
  return (
        <div>
          <BrowserRouter>
              <Navbar/>
              <Router/>  
              <Footer/>  
          </BrowserRouter>
        </div>
  );
}

export default App;
