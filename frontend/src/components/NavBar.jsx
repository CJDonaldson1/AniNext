import React from "react"
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
          <div className="NavHomepage">HomePage</div>
          <div className="NavUpcomingAnimes">Upcoming Animes</div>
          <div className="NavReview">Reviews</div>
          <div className="NavProfile">Profile</div>
        </div>
      </div>
    </div>
  )
}

export default Navbar