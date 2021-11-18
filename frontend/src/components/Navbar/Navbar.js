import React, { Image, useState, useMemo } from 'react';
import { Link } from 'react-router-dom';

import { Container } from '../Container/Container';
import { Logo } from '../Logo/Logo';
import { NavButton } from '../NavButton/NavButton';
import { NavLink } from '../NavLink/NavLink';
import userIcon from './user-icon.png';
import { Dropdown } from 'react-bootstrap';

import './Navbar.css';

const Navbar = ({ onModalToggle, text, loggedIn, logOut }) => {
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
							<Dropdown>
								<Dropdown.Toggle id="dropdown-basic">
									<img
										src={userIcon}
										alt="user"
										width="79"
										height="73"
										className="user-icon"
									/>
								</Dropdown.Toggle>

								<Dropdown.Menu>
									<Dropdown.Item
										href="#"
										onClick={() => logOut()}
									>
										Log Out
									</Dropdown.Item>
									<Dropdown.Item href="#">
										Another action
									</Dropdown.Item>
									<Dropdown.Item href="#">
										Something else
									</Dropdown.Item>
								</Dropdown.Menu>
							</Dropdown>
						)}
						{/* <NavButton onModalToggle={onModalToggle}>Register</NavButton> */}
					</ul>
				</Container>
			</nav>
		</>
	);
};

export default Navbar;
