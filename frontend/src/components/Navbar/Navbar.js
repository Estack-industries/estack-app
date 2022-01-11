import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './Navbar.css';
import EStackLogo from './assets/e-stack-logo.svg';
import DefaultUserIcon from './assets/default-user-icon.svg';

const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg header-nav">
			<div className="container-fluid">
				<a className="navbar-brand" href="/">
					<img src={EStackLogo} alt="logo" />
				</a>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span></span>
					<span></span>
					<span></span>
				</button>
				<div
					className="collapse navbar-collapse justify-content-between"
					id="navbarSupportedContent"
				>
					<ul className="navbar-nav ms-auto mb-2 mb-lg-0">
						<li className="nav-item">
							<a
								className="nav-link"
								aria-current="page"
								href="#"
							>
								Buy
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">
								Sell
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">
								Rent
							</a>
						</li>
						<li className="nav-item dropdown">
							<a
								className="nav-link dropdown-toggle"
								href="#"
								id="navbarDropdown"
								role="button"
								data-bs-toggle="dropdown"
								aria-expanded="false"
							>
								About Us
							</a>
							<ul
								className="dropdown-menu"
								aria-labelledby="navbarDropdown"
							>
								<li>
									<a className="dropdown-item" href="#">
										Add Link 1
									</a>
								</li>
								<li>
									<a className="dropdown-item" href="#">
										Add Link 2
									</a>
								</li>
							</ul>
						</li>
					</ul>
					<ul className="navbar-nav ms-auto">
						<a className="nav-link" href="/#">
							<img
								src={DefaultUserIcon}
								alt="default-user-icon"
								className="user-icon"
								onClick={() => console.log('clicked')}
							/>
						</a>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
