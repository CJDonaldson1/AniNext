import React from 'react';
import {BrowserRouter as Router, Routes,Route,Link} from 'react-router-dom';
import {useState} from 'react';
import HomePage from './pages/HomePage';

function App() {
  return (
    <Router>
      <nav>
        
        <Link to="/Homepage">Homepage</Link>
      </nav>

      <Routes>
        <Route path="/Homepage" element={<HomePage />} />
      </Routes>
    </Router>
  )
}

export default App
