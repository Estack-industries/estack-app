import React from 'react';

import './About.css';

import Navbar from '../../components/Navbar/Navbar';
import Background from '../../components/NavBackground';
import AboutPhoto1 from './assets/about-photo-1.png';
import Divider from './assets/divider.svg';
import FindAnAgent from './assets/find-an-agent.png';
import HelpSellHome from './assets/help-sell-home.png';
import FindApartments from './assets/find-apartments.png';
import Footer from '../../components/Footer/Footer';
import Search from './assets/search.svg';
import AboutMainImage from './assets/about-main-image.png';

function BlueDivider() {
	return (
		<div className="full-width flex flex-center">
			<img src={Divider} alt="divider" />
		</div>
	);
}

const About = () => {
	return (
		<>
			<Background src={[{src: AboutMainImage, width: 64, left: 13}]}/>
			<Navbar />

			<div className="full-width" style={{margin: '6em 0em'}}>
				<p className="white-color extra-large-text bold-text dm-sans medium-padding-left">
					About Us
				</p>
			</div>

			<div className="full-width flex flex-end">
				<div className="lato small-text half-width align-right flex column-flex blue-border-box medium-margin-horizontal full-width-when-small">
					<h2 className="medium-padding-horizontal medium-padding-vertical center-text bold-text">
						E-Stack
					</h2>
					<p className="medium-padding-horizontal small-padding-vertical center-text">
						We offer this complimetary service because we're
						confident you are going to love E-Stack.
					</p>
					<p className="medium-padding-horizontal small-padding-vertical center-text">
						There are no hidden fees and there's never any
						obligation to move foward
					</p>
				</div>
			</div>

			<div className="full-width flex small-padding-vertical">
				<div className="half-width full-width-when-small">
					<p className="small-text center-text dm-sans">
						Get a Free Estimate
					</p>
				</div>
			</div>

			<div className="full-width flex wrap-column-when-small">
				<div className="half-width flex column-flex full-width-when-small">
					<div className="email-input-submit-button">
						<input
							className="email-input center-text"
							placeholder="Enter your Email Address"
							required
						/>
						<p
							alt="click-button"
							onClick={() => console.log('submit')}
						>
							Click
						</p>
					</div>

					<div className="large-space" />

					<div className="full-width flex column-flex">
						<p className="dm-sans medium-text bold-text center-text small-padding-vertical">
							Why Join With Us?
						</p>

						<div className="full-width flex column-flex small-margin why-join-us-container">
							<div className="small-padding">
								<p className="small-padding small-text large-padding-top">
									We are not commodities, we are people. Just
									as we search for a purpose in life, we
									should find meaning in work. Our leadership
									believes in the power of purpose.
								</p>
								<p className="small-padding small-text">
									We advertise your property on all of the
									large recognised property websites, ie
									Rightmove, E-Stack and Prime Location.
								</p>
								<p className="small-padding small-text">
									FREE unlimited professional quality
									photographs.
								</p>
								<p className="small-padding small-text">
									Accompanied viewings whenever required.
									Close communication - giving regular prompt
									feedback on viewing, updates on marketing
									and general market conditions.
								</p>
								<p className="small-padding small-text large-padding-bottom">
									Don't wait around and call us today to
									arrange a meeting. For our contact
									information
								</p>
							</div>
						</div>
					</div>
				</div>

				<div className="half-width flex flex-main-center full-width-when-small">
					<img
						className="full-width medium-padding-horizontal about-photo-1"
						src={AboutPhoto1}
						alt="about-photo-1"
					/>
				</div>
			</div>
			<div className="large-space" />

			<BlueDivider />
			<div className="small-space" />

			<div className="full-width flex flex-center">
				<p className="dm-sans large-text bold-text">
					HOW CAN WE HELP YOU?
				</p>
			</div>
			<div className="small-space" />
			<div className="full-width flex flex-main-center">
				<div className="full-width flex flex-main-center column-flex small-margin-horizontal how-can-we-help-you-background small-border-radius">
					<div className="large-space" />

					<div className="full-width flex photos-container">
						<a className="photo-containter small-margin" href='agent'>
							<img src={FindAnAgent} alt="find-an-agent" />
						</a>
						<a className="photo-containter small-margin" href='sell/upload'>
							<img src={HelpSellHome} alt="help-sell-home" />
						</a>
						<a className="photo-containter small-margin">
							<img src={FindApartments} alt="find-apartments" href='rent'/>
						</a>
					</div>
				</div>
			</div>

			<div className="full-width flex flex-main-center">
				<div className="full-width flex flex-main-center small-padding-horizontal photos-container">
					<div className="photo-container small-margin">
						<p className="medium-text dm-sans">Find an Agent</p>
					</div>
					<div className="photo-container small-margin">
						<p className="medium-text dm-sans">Help Sell Home</p>
					</div>
					<div className="photo-container small-margin">
						<p className="medium-text dm-sans">Find Apartments</p>
					</div>
				</div>
			</div>

			<div className="large-space" />
			<div className="large-space" />
			<BlueDivider />
			<div className="small-space" />
			<div className="full-width flex flex-center">
				<p className="dm-sans large-text bold-text">
					EXPLORE OUR OPTIONS
				</p>
			</div>
			<div className="large-space" />
			<div className="full-width flex flex-main-center">
				<div className="full-width flex column-flex flex-main-center small-margin-horizontal photos-container explore-our-options-background small-border-radius">
					<div className="large-space" />
					<div className="large-space" />
					<div className="full-width flex column-flex flex-center">
						<p className="dm-sans" style={{ fontSize: '30px' }}>
							Enter your address to get an free estimation
						</p>
						<div className="small-space" />

						<div className="flex flex-main-center" style={{width: '55%', position: 'relative'}}>
							<input
								className="address-input"
								placeholder="Address"
								required
							/>
							<img
								className="search-icon"
								src={Search}
								alt="search-icon"
								onClick={() => console.log('submitted')}
							/>
						</div>

						<div className="large-space" />
						<div className="large-space" />
						<div className="large-space" />
						<div className="large-space" />
						<div className="large-space" />
						<div className="large-space" />
						<div className="large-space" />
					</div>
				</div>
			</div>
			<div className="large-space" />
			<Footer />
		</>
	);
};

export default About;
