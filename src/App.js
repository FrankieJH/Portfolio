import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Navbar from './Components/NavBar';

function App() {
  return (
    <div className="App">
      <Navbar className="Navbar"/>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;
