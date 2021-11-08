import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from '../Container/Container';
import { Logo } from '../Logo/Logo';
import { NavButton } from '../NavButton/NavButton';
import { NavLink } from '../NavLink/NavLink';

import './Navbar.css';

const Navbar = ({ onModalToggle, text }) => {
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
							{text}
						</NavButton>
						{/* <NavButton onModalToggle={onModalToggle}>Register</NavButton> */}
					</ul>
				</Container>
			</nav>
		</>
	);
};

export default Navbar;
