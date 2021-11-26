/** @format */

import styled from 'styled-components';

import './Landing.css';
import Footer from './Footer/Footer';
import Buy from '../assets/buy.svg';
import Rent from '../assets/rent.svg';
import Sell from '../assets/sell.svg';
import WhyUs1 from '../assets/why-us-1.svg';
import WhyUs2 from '../assets/why-us-2.svg';
import WhyUs3 from '../assets/why-us-3.svg';
import BobPhoto from '../assets/bob-photo.svg';
import LauraPhoto from '../assets/laura-photo.svg';
import TimPhoto from '../assets/tim-photo.svg';
import StarImage from '../assets/star-image.svg';

const Break = () => {
	return (
		<div className="break-container">
			<hr className="break" />
		</div>
	);
};

const ShadowContainer = ({ children, className }) => {
	return <div className={`shadow-container ${className}`}>{children}</div>;
};

function Landing() {
	return (
		<Container>
			<div className="landing-middle">
				<div className="landing-middle-container">
					<div className="section-title">
						<Break />
						<p>Our Pleasure to Help you in</p>
						<Break />
					</div>

					<div className="section">
						<ShadowContainer>
							<img src={Buy} alt="buy" />
						</ShadowContainer>
						<ShadowContainer>
							<img src={Rent} alt="rent" />
						</ShadowContainer>
						<ShadowContainer>
							<img src={Sell} alt="sell" />
						</ShadowContainer>
					</div>
				</div>

				<div className="landing-middle-container">
					<div className="section-title">
						<Break />
						<p>Why Choose Us?</p>
						<Break />
					</div>

					<div className="section">
						<ShadowContainer className={'flex-column'}>
							<img src={WhyUs1} alt="why-us-1" />
							<p className="text">
								You’ll be in direct contact with the
								landlord/agent and he’ll help you sort out any
								doubts that you may have
							</p>
						</ShadowContainer>
						<ShadowContainer className={'flex-column'}>
							<img src={WhyUs2} alt="why-us-2" />
							<p className="text">
								We give you the details and every requirement
								that is needed for you to buy, rent or sell
							</p>
						</ShadowContainer>
						<ShadowContainer className={'flex-column'}>
							<img src={WhyUs3} alt="why-us-3" />
							<p className="text">
								We help you close the deal of your dream home
							</p>
						</ShadowContainer>
					</div>
				</div>

				<div className="landing-middle-container">
					<div className="section-title">
						<Break />
						<p>What People Say About Us</p>
						<Break />
					</div>

					<div className="section">
						<ShadowContainer className={'flex-row'}>
							<img
								src={BobPhoto}
								alt="bob-photo"
								className="says-about-us"
							/>
							<div className="flex-column">
								<p className="text">
									“This page helped me find my dream home”
								</p>
								<div className="flex-row flex-center">
									<img src={StarImage} alt="star" />
									<img src={StarImage} alt="star" />
									<img src={StarImage} alt="star" />
									<img src={StarImage} alt="star" />
									<img src={StarImage} alt="star" />
								</div>
							</div>
						</ShadowContainer>

						<ShadowContainer className={'flex-row'}>
							<img
								src={LauraPhoto}
								alt="bob-photo"
								className="says-about-us"
							/>
							<div className="flex-column">
								<p className="text">
									“Made it easy to find my new place”
								</p>
								<div className="flex-row flex-center">
									<img src={StarImage} alt="star" />
									<img src={StarImage} alt="star" />
									<img src={StarImage} alt="star" />
									<img src={StarImage} alt="star" />
									<img src={StarImage} alt="star" />
								</div>
							</div>
						</ShadowContainer>

						<ShadowContainer className={'flex-row'}>
							<img
								src={TimPhoto}
								alt="bob-photo"
								className="says-about-us"
							/>
							<div className="flex-column">
								<p className="text">
									“This page helped me find my dream home”
								</p>
								<div className="flex-row flex-center">
									<img src={StarImage} alt="star" />
									<img src={StarImage} alt="star" />
									<img src={StarImage} alt="star" />
									<img src={StarImage} alt="star" />
									<img src={StarImage} alt="star" />
								</div>
							</div>
						</ShadowContainer>
					</div>
				</div>
			</div>

			<Footer />
		</Container>
	);
}

export default Landing;

const Container = styled.div`
	heigth: 100vh;
	padding: 0;
	margin: 0;
`;
