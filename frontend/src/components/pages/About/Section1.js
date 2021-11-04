import React from 'react';
import './Section1.css';
import {
	SECTION1_LEFT_TITLE,
	SECTION1_LEFT_EMAIL,
	SECTION1_RIGHT_TITLE,
	SECTION1_RIGHT_PARAGRAPH,
} from './strings/en.js';

function Section1() {
	return (
		<div className="section1-container">
			{/* Why Section */}
			<div className="estimate-wrapper">
				<h3>{SECTION1_LEFT_TITLE}</h3>
				<input
					className="email-input"
					type="email"
					placeholder={SECTION1_LEFT_EMAIL}
				/>
			</div>
			{/* Divider */}
			<div className="info-wrapper">
				<h2>{SECTION1_RIGHT_TITLE}</h2>
				<p>{SECTION1_RIGHT_PARAGRAPH}</p>
			</div>
		</div>
	);
}

export default Section1;
