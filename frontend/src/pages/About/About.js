import React from 'react';

import './About.css';

import EStackLogo from './assets/e-stack-logo.svg';
import DefaultUserIcon from './assets/default-user-icon.svg';
import AboutMainImage from './assets/about-main-image.png';
import AboutVector1 from './assets/about-vector-1.svg';
import AboutVector2 from './assets/about-vector-2.svg';
import AboutVector3 from './assets/about-vector-3.svg';
import Click from './assets/click.svg';
import AboutPhoto1 from './assets/about-photo-1.png';

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
				<a className="navbar-option white-color open-sans" href="#">
					Buy
				</a>
				<a className="navbar-option white-color open-sans" href="#">
					Sell
				</a>
				<a className="navbar-option white-color open-sans" href="#">
					Rent
				</a>
				<a className="navbar-option white-color open-sans" href="#">
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

			<div className="full-width">
				<p className="white-color large-text dm-sans medium-padding-left">
					About Us
				</p>
			</div>

			<div className="full-width flex flex-end">
				<div className="lato small-text half-width align-right flex column-flex blue-border-box medium-margin-horizontal">
					<p className="medium-padding-horizontal medium-padding-vertical center-text">
						E-Stack
					</p>
					<p className="medium-padding-horizontal small-padding-vectical center-text">
						We offer this complimetary service because we’re
						confident you are going to love E-Stack.
					</p>
					<p className="medium-padding-horizontal small-padding-vectical center-text">
						There are no hidden fees and there’s never any
						obligation to move foward
					</p>
				</div>
			</div>

			<div className="small-space" />

			<div className="full-width flex small-padding-vectical">
				<div className="half-width">
					<p className="small-text center-text dm-sans">
						Get a Free Estimate
					</p>
				</div>
			</div>

			<div className="full-width flex">
				<div className="half-width flex column-flex">
					<div className="full-width flex flex-center">
						<input
							className="email-input center-text"
							placeholder="Enter your Email Address"
							required
						/>
					</div>
					<img
						className="email-input-sumbit-button"
						src={Click}
						alt="click-button"
						onClick={() => console.log('submit')}
					/>
				</div>

				<div className="half-width">
					<img
						className="full-width medium-padding-horizontal about-photo-1"
						src={AboutPhoto1}
						alt="about-photo-1"
					/>
				</div>
			</div>
			<div className="small-space" />
			<div className="small-space" />
			<div className="small-space" />
			<div className="small-space" />
			<div className="small-space" />
		</div>
	);
};

export default About;
