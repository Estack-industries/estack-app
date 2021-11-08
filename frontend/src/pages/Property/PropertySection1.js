import React from 'react';

import './PropertySection1.css';
import SearchBar from '../../SearchBar/SearchBar';
import Rectangle279 from '../../../assets/Rectangle 279.png';

function PropertySection1() {
	return (
		<div className="propertysection1-container">
			<SearchBar />
			<img
				className="property-headerimage"
				src={Rectangle279}
				alt="rectangle"
			></img>
		</div>
	);
}

export default PropertySection1;
