import React from 'react';

import './Footer.css';
import FooterIcon1 from './assets/footer-icon-1.svg';
import FooterIcon2 from './assets/footer-icon-2.svg';
import FooterBreak from './assets/footer-break.svg';
import FacebookIcon from './assets/facebook-icon.svg';
import TwitterIcon from './assets/twitter-icon.svg';
import WiFiIcon from './assets/wifi-icon.svg';
import InstagramIcon from './assets/instagram-icon.svg';

const Footer = () => {
	return (
		<div className="footer-container">
			{/* section before white line */}
			<div className="footer-top">
				<div className="footer-1">
					<img src={FooterIcon1} alt="footer-icon-1" />
					<p className="lato-regular footer-top-text">
						Support teams across the world
					</p>
				</div>
				<div className="footer-2">
					<img src={FooterIcon2} alt="footer-icon-2" />
					<p className="lato-regular footer-top-text">
						Safe & Secure online payment
					</p>
				</div>
			</div>

			{/* white line */}
			<div className="footer-break">
				<img src={FooterBreak} alt="footer-break" />
			</div>

			{/* section after white line & before copyright */}
			<div className="footer-middle">
				<div className="footer-who-we-are">
					<h3 className="dm-sans-regular">WHO WE ARE</h3>
					<br />
					<div className="lato-regular">
						<div className="anchor">
							<a href="#">About</a>
						</div>
						<div className="anchor">
							<a href="#">Team</a>
						</div>
						<div className="anchor">
							<a href="#">Work With Us</a>
						</div>
					</div>
				</div>

				<div className="footer-Estack">
					<h3 className="dm-sans-regular">E-STACK</h3>
					<br />
					<div className="lato-regular">
						<div className="anchor">
							<a href="#">Features</a>
						</div>

						<div className="anchor">
							<a href="#">Payments</a>
						</div>

						<div className="anchor">
							<a href="#">Marketing</a>
						</div>

						<div className="anchor">
							<a href="#">Shipping</a>
						</div>

						<div className="anchor">
							<a href="#">Extension Store</a>
						</div>

						<div className="anchor">
							<a href="#">E-Stack Blog</a>
						</div>

						<div className="anchor">
							<a href="#">Development Blog</a>
						</div>

						<div className="anchor">
							<a href="#">Ideas board</a>
						</div>

						<div className="anchor">
							<a href="#">Mobile App</a>
						</div>

						<div className="anchor">
							<a href="#">Community</a>
						</div>

						<div className="anchor">
							<a href="#">Style Guide</a>
						</div>

						<div className="anchor">
							<a href="#">Email Newsletter</a>
						</div>
					</div>
				</div>

				<div className="footer-other-product">
					<h3 className="dm-sans-regular">OHTER PRODUCTS</h3>
					<br />
					<div className="lato-regular">
						<div className="anchor">
							<a href="#">Storefront</a>
						</div>

						<div className="anchor">
							<a href="#">Agents</a>
						</div>

						<div className="anchor">
							<a href="#">Real-Estate Extensions</a>
						</div>
					</div>
				</div>

				<div className="footer-support">
					<h3 className="dm-sans-regular">SUPPORT</h3>
					<br />
					<div className="lato-regular">
						<div className="anchor">
							<a href="#">Documentations</a>
						</div>
						<div className="anchor">
							<a href="#">Customizations</a>
						</div>
						<div className="anchor">
							<a href="#">Support Policy</a>
						</div>
						<div className="anchor">
							<a href="#">Contact</a>
						</div>
						<div className="anchor">
							<a href="#">COVID-19 Resources</a>
						</div>
					</div>
				</div>

				<div className="footer-we-recommend">
					<h3 className="dm-sans-regular">WE RECOMMEND</h3>
					<br />
					<div className="lato-regular">
						<div className="anchor">
							<a href="#">E-Stack Experts</a>
						</div>
						<div className="anchor">
							<a href="#">Hosting Solutions</a>
						</div>
						<div className="anchor">
							<a href="#">Pre-sales FAQ</a>
						</div>
						<div className="anchor">
							<a href="#">Success Stories</a>
						</div>
						<div className="anchor">
							<a href="#">Design Feedback Group</a>
						</div>
					</div>
				</div>
			</div>

			{/* copyright section */}
			<div className="footer-bottom">
				<div className="footer-contacts">
					<a href="#">
						<img src={TwitterIcon} alt="twitter-icon" />
					</a>
					<a href="#">
						<img src={FacebookIcon} alt="facebook-icon" />
					</a>
					<a href="#">
						<img src={WiFiIcon} alt="wifi-icon" />
					</a>
					<a href="#">
						<img src={InstagramIcon} alt="instagram-icon" />
					</a>
				</div>
				<div className="lato-regular copyright">
					COPYRIGHT E-Stack 2021 - TERMS & CONDITIONS PRIVACY
				</div>
			</div>
		</div>
	);
};

export default Footer;
