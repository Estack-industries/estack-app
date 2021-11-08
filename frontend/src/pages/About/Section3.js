import React from 'react';

import './Section3.css';
import {
	SECTION3_TITLE,
	SECTION3_CARD1,
	SECTION3_CARD2,
	SECTION3_CARD3,
} from './constants/en.js';
import Rectangle288 from './assets/Rectangle 288.png';
import Rectangle289 from './assets/Rectangle 289.png';
import Rectangle290 from './assets/Rectangle 290.png';

function Section3() {
	return (
		<div className="section3-container">
			{/* How Section */}
			<div className="how-wrapper">
				<h1 className="how-title">{SECTION3_TITLE}</h1>
				<div className="how-grid">
					<div className="how-card">
						<img
							className="how-card-image"
							src={Rectangle288}
							alt="rectangle"
						></img>
						<h2>{SECTION3_CARD1}</h2>
					</div>
					<div className="how-card">
						<img
							className="how-card-image"
							src={Rectangle289}
							alt="rectangle"
						></img>
						<h2>{SECTION3_CARD2}</h2>
					</div>
					<div className="how-card">
						<img
							className="how-card-image"
							src={Rectangle290}
							alt="rectangle"
						></img>
						<h2>{SECTION3_CARD3}</h2>
					</div>
				</div>
			</div>
			{/* Divider */}
			<div className="divider-grid">
				<div></div>
				<div className="divider"></div>
			</div>
		</div>
	);
}

export default Section3;
