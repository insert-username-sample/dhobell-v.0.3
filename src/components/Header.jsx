import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavigation = () => {
    setIsMenuOpen(false);
    navigate('/coming-soon');
  };

  return (
    <header className="header">
      <div className="header-content">
        <div className="logo-container">
          <Link to="/">Dhobell</Link>
        </div>
        <button className="menu-toggle" onClick={toggleMenu}>
          <span className={`hamburger ${isMenuOpen ? 'active' : ''}`}></span>
        </button>
        <nav className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <Link to="/coming-soon" onClick={handleNavigation}>Home</Link>
          <Link to="/coming-soon" onClick={handleNavigation}>Services</Link>
          <Link to="/coming-soon" onClick={handleNavigation}>Pricing</Link>
          <Link to="/coming-soon" onClick={handleNavigation}>Contact</Link>
          <div className="mobile-auth-buttons">
            <button className="login-btn" onClick={handleNavigation}>Login</button>
            <button className="signup-btn" onClick={handleNavigation}>Sign Up</button>
          </div>
        </nav>
        <div className="desktop-auth-buttons">
          <button className="login-btn" onClick={handleNavigation}>Login</button>
          <button className="signup-btn" onClick={handleNavigation}>Sign Up</button>
        </div>
      </div>
    </header>
  );
}

export default Header;
