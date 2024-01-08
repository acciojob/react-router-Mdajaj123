
import React from "react";
import './../styles/App.css';
import {Routes,Route} from 'react-router-dom'
import Home from './Home';
import About from './About';
import Navigation from "./Navigation";
const App = () => {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
      </Routes>
    </div>
  )
}

export default App
