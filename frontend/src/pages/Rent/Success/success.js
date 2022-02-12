import React from 'react';
import Confetti from 'react-confetti';
import NavBackground from '../../../components/NavBackground';
import navbarImage from '../navbar-image.webp';
import Footer from '../../../components/Footer/Footer';
import Navbar from '../../../components/Navbar/Navbar';
import middleIcon from './middle.png';
import './success.css';

export default function Success() {
	return (
		<div>
			<Navbar />
			<NavBackground
				src={[{ src: navbarImage, width: 80, left: 13 }]}
				opacity={0.4}
			/>
			<img src={middleIcon} className="successicon" />
			<div className="large-space" />
			<main>
				<Confetti className="splash" opacity={0.9} gravity={0.07} />
				<div class="cardNote">
				<h1 class="card-title">Congratulations!</h1>
					<div class="body">
						Your Rental Property is Posted on Estack!
					</div>
				</div>
				<div class="row custom">
					<div class="col-sm-12 text-center">
						<button type="button" class="btn btn-lg custom">
							Home
						</button>
						<button type="button" class="btn btn-lg custom">
							DashBoard
						</button>
					</div>
				</div>
			</main>
			<Footer />
		</div>
	);
}