import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import {
	IoLogoTwitter,
	IoLogoFacebook,
	IoLogoInstagram,
	IoWifi,
} from 'react-icons/io5';
import { Container } from '../Container/Container';

function Footer() {
	return (
		<nav className="footer">
			<Container pb="container--nopb">
				<div className="footerStart">
					<p>
						<b>Support</b> teams across the world
					</p>
					<p>
						<b>Safe &amp; Secure</b> online payment
					</p>
				</div>
				<hr className="footerBreak" />
				<div className="footerContent">
					<div className="footerSectionContainer">
						<p className="footerSectionTitle">WHO WE ARE</p>
						<ul>
							<Link to="#" className="sectionLinks">
								About
							</Link>
							<Link to="#" className="sectionLinks">
								Team
							</Link>
							<Link to="#" className="sectionLinks">
								Work With Us
							</Link>
						</ul>
					</div>
					<div className="footerSectionContainer">
						<p className="footerSectionTitle">E-STACK</p>
						<ul>
							<Link to="#" className="sectionLinks">
								Features
							</Link>
							<Link to="#" className="sectionLinks">
								Payments
							</Link>
							<Link to="#" className="sectionLinks">
								Marketing
							</Link>
							<Link to="#" className="sectionLinks">
								Shipping
							</Link>
							<Link to="#" className="sectionLinks">
								Extension Store
							</Link>
							<Link to="#" className="sectionLinks">
								E-Stack blog
							</Link>
							<Link to="#" className="sectionLinks">
								Development blog
							</Link>
							<Link to="#" className="sectionLinks">
								Ideas board
							</Link>
							<Link to="#" className="sectionLinks">
								Mobile App
							</Link>
							<Link to="#" className="sectionLinks">
								Community
							</Link>
							<Link to="#" className="sectionLinks">
								Style Guide
							</Link>
							<Link to="#" className="sectionLinks">
								Email Newsletter
							</Link>
						</ul>
					</div>
					<div className="footerSectionContainer">
						<p className="footerSectionTitle">OTHER PRODUCTS</p>
						<ul>
							<Link to="#" className="sectionLinks">
								Storefront
							</Link>
							<Link to="#" className="sectionLinks">
								Agents
							</Link>
							<Link to="#" className="sectionLinks">
								Real-Estate Extensions
							</Link>
						</ul>
					</div>
					<div className="footerSectionContainer">
						<p className="footerSectionTitle">SUPPORT</p>
						<ul>
							<Link to="#" className="sectionLinks">
								Documentation
							</Link>
							<Link to="#" className="sectionLinks">
								Customizations
							</Link>
							<Link to="#" className="sectionLinks">
								Support Policy
							</Link>
							<Link to="#" className="sectionLinks">
								Contact
							</Link>
							<Link to="#" className="sectionLinks">
								COVID-19 Resources
							</Link>
						</ul>
					</div>
					<div className="footerSectionContainer">
						<p className="footerSectionTitle">WE RECOMMEND</p>
						<ul>
							<Link to="#" className="sectionLinks">
								E-Stack Experts
							</Link>
							<Link to="#" className="sectionLinks">
								Housing Solutions
							</Link>
							<Link to="#" className="sectionLinks">
								Pre-sales FAQ
							</Link>
							<Link to="#" className="sectionLinks">
								Success Stories
							</Link>
							<Link to="#" className="sectionLinks">
								Design Feedback Group
							</Link>
						</ul>
					</div>
				</div>
				<div className="footerBottom">
					<div className="logoContainer">
						<a
							className="socialLogo"
							href="http://twitter.com/"
							target="_blank"
							rel="noreferrer"
						>
							<IoLogoTwitter />
						</a>
						<a
							className="socialLogo"
							href="http://facebook.com/"
							target="_blank"
							rel="noreferrer"
						>
							<IoLogoFacebook />
						</a>
						<a
							className="socialLogo"
							href="http://instagram.com/"
							target="_blank"
							rel="noreferrer"
						>
							<IoLogoInstagram />
						</a>
						<a
							className="socialLogo"
							href="/"
							target="_blank"
							rel="noreferrer"
						>
							<IoWifi />
						</a>
					</div>
					<div className="terms">
						COPYRIGHT E-Stack 2021 -{' '}
						<a
							className="terms"
							href="/"
							target="_blank"
							rel="noreferrer"
						>
							<u>TERMS &amp; CONDITIONS</u> <u>PRIVACY POLICY</u>
						</a>
					</div>
					<div></div>
				</div>
			</Container>
		</nav>
	);
}

export default Footer;
