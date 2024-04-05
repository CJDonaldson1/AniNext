import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Navbar from './components/NavBar' 

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/Homepage" element={<HomePage />} />
        <Route path="/upcoming-animes" element={<div>Upcoming Animes</div>} />
        <Route path="/profile" element={<div>Profile</div>} />
        <Route path="/reviews" element={<div>Reviews</div>} />
      </Routes>
    </Router>
  )
}

export default App