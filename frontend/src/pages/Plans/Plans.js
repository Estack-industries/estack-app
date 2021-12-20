import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './Plans.css';

import EStackLogo from './assets/e-stack-logo.svg';
import DefaultUserIcon from './assets/default-user-icon.svg';
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

/* Note:
 * Need to change the dimensions and sizes of the imgs
 */
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

const Plans = () => {
	return (
		<div>
			<Background />
			<NavBar />

			<div className="full-width">
				<p className="white-color extra-large-text blod-text dm-sans medium-padding-left">
					E-Stack Plans
				</p>
			</div>
			<div className="large-space" /> 
			<div className="large-space" />
			<div className="large-space" />
			<div className="large-space" />
			<div class="row">
				<div class="col-sm-6">
				<div className="margin" />
					<div class="card">
						<div class="card-body">
							<h4 class="card-title">Basic Plan</h4>
                            <div className="small-space" />
							<h5 class="card-subtitle">Free</h5>
							<hr />
							<span class="check">&#10003;</span>
							<span>&emsp;You can message the agents</span>
							<div className="small-space" />
							<span class="check">&#10003;</span>
							<span>
								&emsp;You can navigate and register for free
							</span>
							<div className="small-space" />
							<span class="check">&#10003;</span>
							<span>
								&emsp;You can search for your new lease for free
							</span>
							<div className="small-space" />
							<span class="check">&#10003;</span>
							<span>
								&emsp;You can only sell 1 property at a time
							</span>
							<div className="small-space" />
							<span class="check">&#10003;</span>
							<span>&emsp;Help from our team 24/7</span>
							<div className="small-space" />
							<a href="#">&emsp;Learn More</a>
						</div>
					</div>
				</div>
				<div class="col-sm-6">
				<div class="label">Recommended Plan</div>
					<div class="card">
                    <div class="card-body">
							<h4 class="card-title">Premium Plan</h4>
                            <div className="small-space" />
							<h5 class="card-subtitle">20$</h5>
                            <h6 class="card-detail">Per month, paid annually</h6>
							<hr />
							<span class="check">&#10003;</span>
							<span>&emsp;You can be in direct contact with the seller and call if you want to</span>
							<div className="small-space" />
							<span class="check">&#10003;</span>
							<span>
								&emsp;Exclusive discounts and promotions inside the platform
							</span>
							<div className="small-space" />
							<span class="check">&#10003;</span>
							<span>
								&emsp;We help you with the marketing of your listings
							</span>
							<div className="small-space" />
							<span class="check">&#10003;</span>
							<span>
								&emsp;No limits in the amount of properties that you can list on our platform
							</span>
							<div className="small-space" />
                            <span class="check">&#10003;</span>
							<span>&emsp;You'll receive our recommendations to sell/buy/lease efficiently</span>
							<div className="small-space" />
							<span class="check">&#10003;</span>
							<span>&emsp;Help from our team 24/7</span>
							<div className="small-space" />
							<a href="#">&emsp;Learn More</a>
                            <div className="small-space" />
                            <button type="button" class="btn btn-warning">Try our premium plan</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Plans;
