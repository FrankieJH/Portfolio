import React from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import './App.css';
import HomePage from './Pages/HomePage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<HomePage/>}/>
      </Routes>
    </div>
  );
}

export default App;
