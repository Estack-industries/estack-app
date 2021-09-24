import React from 'react';
import { Link } from 'react-router-dom';
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
            <li className='nav-item'>
              <Link to='/about' className='nav-links'>
                About Us
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/' className='nav-links'>
                Log In
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/' className='nav-links'>
                Register
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar
