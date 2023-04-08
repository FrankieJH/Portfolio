import React from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import NavBar from './Components/NavBar'

function App() {
  return (
    <div className="App">
      <Routes>
      <Route exact path='/' element={<NavBar/>}/>
        <Route  path='/Home' element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;
