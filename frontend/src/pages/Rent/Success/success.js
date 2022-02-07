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
				<div class="card">
				<h3 class="card-title">Congratulations!</h3>
					<div class="card-body">
						Your Rental Property is Posted on Estack!
					</div>
				</div>
		<div className="row row-cols-1 row-cols-lg-2">
			<div className="col">
				<button type="button" class="btn-block position-relative">
					<a href="#" className="direct">Home </a>
				</button>
			</div>
			<div className="col">
				<button type="button" class="btn-block position-relative">
					<a href="#" className="direct">DashBoard</a>
				</button>
			</div>
		</div>
			</main>
			<Footer />
		</div>
	);
}
