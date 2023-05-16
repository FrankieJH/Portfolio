import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Navbar from './Components/NavBar.js';
import Project from './Pages/Project00';

function App() {
  return (
    <div className="App">
      <Navbar className="Navbar"/>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path='/Project00' element={<Project />} />
      </Routes>
    </div>
  );
}

export default App;
