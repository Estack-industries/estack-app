import React, { Image } from 'react';
import { Link } from 'react-router-dom';

import { Container } from '../Container/Container';
import { Logo } from '../Logo/Logo';
import { NavButton } from '../NavButton/NavButton';
import { NavLink } from '../NavLink/NavLink';
import userIcon from './user-icon.png';

import './Navbar.css';

const Navbar = ({ onModalToggle, text, loggedIn }) => {
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
						{!loggedIn && (
							<NavButton onModalToggle={onModalToggle}>
								{text}
							</NavButton>
						)}
						{loggedIn && (
							<div className="user-icon-container">
								<img
									src={userIcon}
									alt="user"
									width="79"
									height="73"
									className="user-icon"
									onClick={() => console.log('it works!')}
								/>
							</div>
						)}
						{/* <NavButton onModalToggle={onModalToggle}>Register</NavButton> */}
					</ul>
				</Container>
			</nav>
		</>
	);
};

export default Navbar;
