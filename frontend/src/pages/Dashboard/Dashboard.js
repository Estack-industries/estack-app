import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Axios from 'axios';
import styles from './Dashboard.module.css';
import Navbar from '../../components/Navbar/Navbar';
import Background from '../../components/NavBackground';
import Footer from '../../components/Footer/Footer';
import { faBed, faBath, faThLarge } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import BuildingImage from './assets/cityline.png';
import HouseImage from './assets/houses.png';
import Handshake from './assets/handshake.png';
import squareOne from './assets/squareOne.png';
import squareTwo from './assets/squareTwo.png';
import squareThree from './assets/squareThree.png';
import smalldiv from './assets/smallDivider.png';
import divider from './assets/divider.png';
import middleIcon from './assets/middleIcon.png';
import rentOne from './assets/rentOne.png';
import rentTwo from './assets/rentTwo.png';
import rentThree from './assets/rentThree.png';

/* 
* Note:
* Need to make corresponding changes after the backend is completely designed
*/

const Dashboard = () => {
	const [listings, setListings] = useState([]);

	useEffect(() => {
		Axios.get('http://localhost:3001/property/get').then((response) => {
			setListings(response.data);
		});
	}, []);

	const backgroundImages = [
		{
			src: BuildingImage,
			width: 50,
			left: 0,
		},
		{
			src: HouseImage,
			width: 55,
			left: 30,
		},
		{
			src: Handshake,
			width: 25,
			left: 70,
			height: 9.5,
			
		},
	];

	return (
		<div>
			<Background src={backgroundImages} />
			<Navbar />
			<h1 className={styles.title}>Pick a <span className={styles.highlight}>Dashboard</span></h1>

			<div className="large-space" />
			<div className="large-space" />
			<div className="large-space" />
			<div className="large-space" />
			<div className="large-space" />
			<div className="large-space" />
			<div className="large-space" />

			<div className={styles.row}>
				<div className={styles.column}>
					<img className={styles.image} src={squareOne} alt="firstOpt" />
				</div>
				<div className={styles.column}>
					<img className={styles.image} src={squareTwo} alt="secondOpt" />
				</div>
				<div className={styles.column}>
					<img className={styles.image} src={squareThree} alt="thirdOpt" />
				</div>
			</div>
			<div className={styles.row}>
				<div className={styles.column}>
					<a className={styles.btn} href="sellerdashboard" role="button">
						Sell Homes
					</a>
				</div>
				<div className={styles.column}>
					<a className={styles.btn} href="#" role="button">
						Be a Landlord
					</a>
				</div>
				<div className={styles.column}>
					<a className={styles.btn} href="#" role="button">
						Upgraded User
					</a>
				</div>
			</div>
			<div className="large-space" />
			<div className={styles.row}>
				<div className={styles.column}>
					<img className={styles.image} src={divider} alt="divide" />
				</div>
				<div className={styles.column}>
					<img className={styles.icon} src={middleIcon} alt="icon" />
				</div>
				<div className={styles.column}>
					<img className={styles.image} src={divider} alt="divide" />
				</div>
			</div>
			<div className={styles.info}>
				<h3>Our Team Win's</h3>
				<p>
					Our clients get the best software to manage and control
					their environment online. With different various dashboards
					to choose from our selection gives you the competitive edge.
					We give you the power in your hands! To avoid hassle and
					frustration, select and enjoy! flourish in our webpage...
					Good luck!
				</p>
				<div className="small-space" />
				<p className={styles.additional}>
					check above to find the resources available to start today
				</p>
			</div>

			<div className="large-space" />
			<img className={styles.divide} src={smalldiv} alt="smallDivide" />
			<h2 className={styles.title2}> Rent Listings</h2>
			<div className="row row-cols-1 row-cols-md-3 g-4">
				{listings.map((val) => {
					return (
						<div className="col">
							<div className="card h-100">
								<img
									src={rentOne}
									class="card-img-top"
									alt="..."
								/>
								<div className="card-body">
									<h5 className={styles.cardtitle}>
										{val.street}, {val.city}, {val.state}
									</h5>
									<p className="card-text">
										<span className="space">
											&emsp;&emsp;
										</span>
										{val.listingPrice}${' '}
										<span className="space">&emsp;</span>|{' '}
										<span className="space">&emsp;</span>{' '}
										<span className="new">New</span>
									</p>
									<div className="small-space" />
									<span className="space">&emsp;</span>
									<FontAwesomeIcon icon={faBed} />
									<span className="space">&emsp;</span>
									{val.numBedrooms}
									<span className="space">&emsp;&emsp;</span>
									<FontAwesomeIcon icon={faBath} />
									<span className="space">&emsp;</span>
									{val.numBathrooms}
									<span className="space">&emsp;&emsp;</span>
									<FontAwesomeIcon icon={faThLarge} />
									<span className="space">&emsp;</span>
									{val.sqaureft}
								</div>
							</div>
						</div>
					);
				})}
			</div>
			<div className="large-space" />
			<Footer />
		</div>
	);
};

export default Dashboard;
