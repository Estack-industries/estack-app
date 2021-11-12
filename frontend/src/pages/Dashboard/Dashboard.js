import React from 'react';

import { WaveBG } from '../../components/WaveBG/WaveBG';
import './Dashboard.css';
import PropertyPhoto from './assets/Property photo.png';
import Container from './Container/Container';

const Dashboard = () => {
	return (
		<>
			<WaveBG />
			<div className="dashboard-container">
				<h1 className="dashboard-text">Dashboard</h1>
				<img src={PropertyPhoto} />

				<div className="info-section">
					<Container
						title={'E-stack Estimate'}
						data={'$600000'}
						description={'+8% since last year'}
					/>
					<Container
						title={'Activity'}
						data={'100 VIEWS'}
						description={'45% Most Viewed'}
					/>
					<Container
						title={'Average sale price'}
						data={'$470000'}
						description={'+2% since last month'}
					/>
					<Container
						title={'Complete Score'}
						data={'54/100'}
						description={'Avg 25 days on market'}
					/>
				</div>
			</div>
		</>
	);
};

export default Dashboard;
