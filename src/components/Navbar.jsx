import "../css/multy.css";
import React from "react";
import { Link } from "react-router-dom";
import logo from  "../images/logo.png";

const Navbar = () => {
  return (
    <nav className="multy-nav-bar">
      <a href="#" className="multy-logo">
        <img className="logo-icon" src={logo} alt="Multy Engineers Logo"/>
        <div className="multy-logo-text">
          <h2 className="logo-name">MULTY</h2>
          <span className="logo-sub">ENGINEERS</span>
        </div>
      </a>

      <Link to="/" className="active">Home</Link>
      <Link to="/aboutus">About Us</Link>
      <Link to="/contact">Contact Us</Link>
    </nav>
  );
};

export default Navbar;
