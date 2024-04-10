import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

export const Navbar = () => {
  return (
    <div className="navbar-container"> {/* Changed from 'box' to 'navbar-container' */}
      <div className="nav-bar-home">
        <div className="nav-bar">
          <div className="text-wrapper">AniNext</div>
          <Link to="/" className="div">HomePage</Link> {/* Changed to Link */}
          <Link to="/anime-list" className="text-wrapper-2">Upcoming Animes</Link> {/* Changed to Link */}
          <Link to="/reviews" className="text-wrapper-3">Reviews</Link> {/* Changed to Link */}
          <Link to="/profile" className="text-wrapper-4">Profile</Link> {/* Changed to Link */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;



