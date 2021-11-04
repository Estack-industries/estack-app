import React from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from '../NavLink/NavLink';
import { Logo } from '../Logo/Logo';
import { NavButton } from '../NavButton/NavButton';
import { Container } from '../Container/Container';
import './Navbar.css';

function Navbar({ onModalToggle }) {
	return (
		<>
			<nav className="navbar">
				<Container d="container--row">
					<Logo />
					<Link to="/" className="navbar-logo">
						-Stack
					</Link>
					{/* Navbar Menu Items */}
					<ul className="nav-menu">
						<NavLink buttonStyle="btn--dropdown" to="/about">
							About Us
						</NavLink>
						<NavButton onModalToggle={onModalToggle}>
							Log In
						</NavButton>
						{/* <NavButton onModalToggle={onModalToggle}>Register</NavButton> */}
					</ul>
				</Container>
			</nav>
		</>
	);
}

export default Navbar;
