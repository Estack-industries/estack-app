import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './Navbar.css';
import EStackLogo from './assets/e-stack-logo.svg';
import DefaultUserIcon from './assets/default-user-icon.svg';

function Navbar() {
	return (
		<div className="navbar-container">
			<a className="logo" href="/">
				<img
				src={EStackLogo}
				alt="estack-logo"
				className="estack-logo"
				onClick={() => console.log('clicked')}
			/></a>
			<div className="navbar-options">
				<a className="navbar-option white-color open-sans" href="#">
					Buy
				</a>
				<a className="navbar-option white-color open-sans" href="#">
					Sell
				</a>
				<a className="navbar-option white-color open-sans" href="#">
					Rent
				</a>
				<a
					className="navbar-option white-color open-sans"
					href="#"
					id="navbarDropdown"
					role="button"
					data-bs-toggle="dropdown"
					aria-expanded="false"
				>
					About Us
				</a>
				<ul class="dropdown-menu" aria-labelledby="navbarDropdown">
					<li>
						<a class="dropdown-item" href="#">
							Link
						</a>
					</li>
					<li>
						<a class="dropdown-item" href="#">
							Link 2
						</a>
					</li>
				</ul>
			</div>
			<img
				src={DefaultUserIcon}
				alt="default-user-icon"
				className="user-icon"
				onClick={() => console.log('clicked')}
			/>
		</div>
	);
}

export default Navbar;
