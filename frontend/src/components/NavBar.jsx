// frontend/src/components/NavBar.jsx
import React from 'react'
import { NavLink } from 'react-router-dom'
import './NavBar.css'

function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="navbar-title">AniNext</h1>
      <div className="navbar-links">
        <NavLink activeClassName="active" to="/homepage">HomePage</NavLink>
        <NavLink activeClassName="active" to="/upcoming-animes">Upcoming Animes</NavLink>
        <NavLink activeClassName="active" to="/profile">Profile</NavLink>
        <NavLink activeClassName="active" to="/reviews">Reviews</NavLink>
      </div>
    </nav>
  )
}

export default Navbar
