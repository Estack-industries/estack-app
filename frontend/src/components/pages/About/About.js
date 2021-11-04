import React from 'react';
import { Container } from '../../Container/Container';
import { WaveBG } from '../../WaveBG/WaveBG';
import image136 from './assets/image 136.svg';
import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';
import Section4 from './Section4';
import './About.css';

function About() {
	return (
		<div className="about-container">
			<WaveBG src={image136} title="About Us" />
			<Container>
				<Section1 className="about-section1" />
				<Section2 />
				<Section3 />
				<Section4 />
			</Container>
		</div>
	);
}

export default About;
