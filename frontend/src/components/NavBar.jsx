import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"

export const Navbar = () => {
  return (
    <div className="navbar">
      <span className="text-wrapper">A</span>
      <span className="span">niNext</span>
      <Link to="/" className="NavHomepage">HomePage</Link>
      <Link to="/anime-list" className="NavUpcomingAnimes">Upcoming Anime</Link>
      <Link to="/reviews" className="NavReview">Reviews</Link>
      <Link to="/profile" className="NavProfile">Profile</Link>
    </div>
  )
}

export default Navbar