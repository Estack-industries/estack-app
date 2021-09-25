import React from 'react';
import { Link } from 'react-router-dom';
import { NavButton } from '../NavButton/NavButton'
import './Navbar.css';

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          {/* Logo */}
          <Link to="/" className="navbar-logo">
            -Stack
          </Link>
          {/* Navbar Menu Items */}
          <ul className="nav-menu">
            <NavButton buttonStyle='btn--dropdown' to='/about'>About US</NavButton>
            <NavButton>Log In</NavButton>
            <NavButton>Register</NavButton>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar