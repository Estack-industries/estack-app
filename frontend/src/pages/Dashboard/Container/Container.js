import React from 'react';

import './Container.css';

const Container = ({ title, icon, data, description }) => {
	return (
		<div className="container">
			<h2>{title}</h2>
			<h2>{data}</h2>
			<h2>{description}</h2>
		</div>
	);
};

export default Container;
