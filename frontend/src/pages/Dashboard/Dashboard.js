import React, { useState, useEffect } from 'react';

import { WaveBG } from '../../components/WaveBG/WaveBG';
import './Dashboard.css';
import PropertyPhoto from './assets/Property photo.png';
import Container from './Container/Container';

const Dashboard = () => {
	const [dashboardData, setDashboardData] = useState(null); // expect json || text

	// wait for backend
	/*
	useEffect(() => {
		(async () => {
			const res = await fetch('/api/user/userid/dashboard'); // ?
			const json = await res.json();
			setDashboardData(json);
		})();
	}, []);
	*/

	return (
		<>
			<WaveBG />
			<div className="dashboard-container">
				<div className="dashboard-text-container">
					<h1 className="dashboard-text">Dashboard</h1>
				</div>
				<div className="dashboard-image-container">
					<img src={PropertyPhoto} />
				</div>

				{/* TODO: insert image path */}
				<div className="info-section">
					<Container
						title={'E-stack Estimate'}
						data={'$600000'}
						description={'+8% since last year'}
						icon={''}
					/>
					<Container
						title={'Activity'}
						data={'100 VIEWS'}
						description={'45% Most Viewed'}
						icon={''}
					/>
					<Container
						title={'Average sale price'}
						data={'$470000'}
						description={'+2% since last month'}
						icon={''}
					/>
					<Container
						title={'Complete Score'}
						data={'54/100'}
						description={'Avg 25 days on market'}
						icon={''}
					/>
				</div>

				<br />
			</div>

			<div className="middle-section" onClick={() => console.log('hi')}>
				<h1>E-Stack Estimate For 30 Future st.</h1>
				{/* add image path */}
				<img src="" alt="image" />
			</div>

			<div className="options-section">
				<div className="option" onClick={() => console.log('hey')}>
					Edit home
				</div>
				<div className="option" onClick={() => console.log('hey')}>
					Messages
				</div>
				<div className="option" onClick={() => console.log('hey')}>
					Transactions
				</div>
				<div className="option" onClick={() => console.log('hey')}>
					My Likes
				</div>
			</div>

			<div className="chart-title">
				<h1>$ 650,000</h1>
				{/* Add image path */}
				<img src="" alt="image" />
			</div>

			<div className="chart-section">
				{/*
					Add chart
				*/}
			</div>
		</>
	);
};

export default Dashboard;
