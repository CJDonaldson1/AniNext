import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"

export const Navbar = () => {
  return (
    <div className="box">
      <div className="nav-bar-home">
        <div className="nav-bar">
          <p className="ani-next">
            <span className="text-wrapper">A</span>
            <span className="span">niNext</span>
          </p>
          {/* Convert divs to Link components for navigation */}
          <Link to="/" className="div">HomePage</Link>
          <Link to="/anime-list" className="text-wrapper-2">Upcoming Animes</Link>
          <Link to="/reviews" className="text-wrapper-3">Reviews</Link>
          <Link to="/profile" className="text-wrapper-4">Profile</Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar
