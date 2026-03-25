import React from 'react';
import "../css/multy.css";
import { Link } from "react-router-dom";
import logo from  "../images/logo.png";

const Header = () => {
  return (
    <header className="multy-header">
      <a href="#" className="multy-logo">
        <img className="logo-icon"src={logo} alt="Multy Engineers Logo" />
        <div className="multy-logo-text">
          <h2 className="logo-name">MULTY</h2>
          <span className="logo-sub">ENGINEERS</span>
        </div>
      </a>

      <nav className="multy-nav">
        <Link to="/" className="active">Home</Link>
        <Link to="/aboutus">About Us</Link>
        <Link to="/contactus">Contact Us</Link>
      </nav>
    </header>
  );
};

export default Header;