import React from "react";
import "../css/multy.css";
import logo from  "../images/logo.png";

const Footer = () => {
  return (
    <footer className="multy-footer">
      
      <div className="footer-top">
        <a href="#" className="multy-logo">
          <img className="logo-icon" src={logo} alt="Multy Engineers Logo"/>
          <div className="multy-logo-text">
            <span className="logo-name">MULTY</span>
            <span className="logo-sub">ENGINEERS</span>
          </div>
        </a>

        <div className="footer-contact">
          
          <a href="tel:+94777137">
            <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4
                1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1
                1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0
                1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"
              />
            </svg>
            +94 777 137
          </a>

          <a href="mailto:info@multyengineers.com">
            <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2
                2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0
                4l-8 5-8-5V6l8 5 8-5v2z"
              />
            </svg>
            info@multyengineers.com
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2024 Multy Engineers. All Rights Reserved.</p>
        <div className="footer-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
