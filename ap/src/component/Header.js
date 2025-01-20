import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <div className="header-container">
      <img src="/photos/logo.png" alt="logo" className="logo"/>

      <nav className="nav-link">
        <a href="/_" className="nav-link-black">
          Home
        </a>
        <a href="/about" className="nav-link-black">
          About Us
        </a>
        <a href="/services" className="nav-link-black">
          Services
        </a>
        <a href="/contact" className="nav-link-black">
          Contact
        </a>
      </nav>
    
      </div>
    </header>
    
  );
};

export default Header;