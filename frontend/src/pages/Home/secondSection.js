import React from 'react';
import { Link } from 'react-router-dom';

import './secondSection.css';
import Mission from './pictures/mission.png';
import Sell from './pictures/sell.png';
import Rent from './pictures/rent.png';
import Buy from './pictures/buy.png';
import { MISSION_TEXT } from './constants/en';
import { SectionGrid } from '../../components/SectionGrid/SectionGrid';

function secondSection() {
	return (
		<div className="secondSection">
			<div className="missionContainer">
				<p className="missionText">{MISSION_TEXT}</p>
				<div />
				<p className="missionPic">
					<img src={Mission} alt="Mission Pic" />
				</p>
			</div>
			<SectionGrid>
				<Link to="/sell">
					<img className="sellRentBuyimg" src={Sell} alt="Sell" />
				</Link>
				<Link to="/rent">
					<img className="sellRentBuyimg" src={Rent} alt="Rent" />
				</Link>
				<Link to="/buy">
					<img className="sellRentBuyimg" src={Buy} alt="Buy" />
				</Link>
			</SectionGrid>
		</div>
	);
}

export default secondSection;
