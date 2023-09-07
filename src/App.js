import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Navbar from './Components/NavBar';
import Project00 from './Pages/Project00';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path='/Project00' element={<Project00/>}/>
      </Routes>
    </div>
  );
}

export default App;
