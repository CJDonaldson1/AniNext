import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"

export const Navbar = () => {
  return (
    <div className="box">
      <div className="navbar">
        <div className="nav-bar">
          <p className="ani-next">
            
            <span className="text-wrapper">A</span>
            <span className="span">niNext</span>
          </p>
          <Link to="/" className="NavHomepage">HomePage</Link>
          <Link to="/anime-list" className="NavUpcomingAnimes">Upcoming Animes</Link>
          <Link to="/reviews" className="NavReview">Reviews</Link>
          <Link to="/profile" className="NavProfile">Profile</Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar