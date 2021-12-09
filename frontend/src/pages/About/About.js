import React from 'react';

import './About.css';

import EStackLogo from './assets/e-stack-logo.svg';
import DefaultUserIcon from './assets/default-user-icon.svg';
import AboutMainImage from './assets/about-main-image.png';
import AboutVector1 from './assets/about-vector-1.svg';
import AboutVector2 from './assets/about-vector-2.svg';
import AboutVector3 from './assets/about-vector-3.svg';

function NavBar() {
	return (
		<div className="navbar-container">
			<img
				src={EStackLogo}
				alt="estack-logo"
				className="estack-logo"
				onClick={() => console.log('clicked')}
			/>
			<div className="navbar-options">
				<a className="navbar-option" href="#">
					Buy
				</a>
				<a className="navbar-option" href="#">
					Sell
				</a>
				<a className="navbar-option" href="#">
					Rent
				</a>
				<a className="navbar-option" href="#">
					About Us
				</a>
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

function Background() {
	return (
		<>
			<img src={AboutVector1} alt="about-vector-1" className="vector-1" />
			<img src={AboutVector2} alt="about-vector-2" className="vector-2" />
			<img src={AboutVector3} alt="about-vector-3" className="vector-3" />
			{/* <img
				src={AboutMainImage}
				alt="about-main-image"
				className="main-image"
			/> */}
		</>
	);
}

const About = () => {
	return (
		<div>
			<Background />
			<NavBar />
		</div>
	);
};

export default About;
