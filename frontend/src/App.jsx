import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Navbar from './components/NavBar'
import AnimeListPage from './pages/AnimeListPage'
import ProfilePage from './pages/UserProfilePage'
import ReviewsPage from './pages/ReviewFormPage'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/anime-list" element={<AnimeListPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/reviews" element={<ReviewsPage />} />
      </Routes>
    </Router>
  )
}

export default App