import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Navbar from './components/NavBar'
import AnimeListPage from './pages/AnimeListPage'
import ProfilePage from './pages/UserProfilePage'
import ReviewsPage from './pages/ReviewFormPage'
import UserLoginPage from './pages/UserLoginPage'
import UserSignupPage from './pages/UserSignupPage'
// import Chatbot from '../Chatbot/config'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/anime-list" element={<AnimeListPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/reviews" element={<ReviewsPage />} />
        <Route path="/login" element={<UserLoginPage />} />
        <Route path="/signup" element={<UserSignupPage />} />
      </Routes>
      {/* <Chatbot />  */}
    </Router>
  )
}

export default App