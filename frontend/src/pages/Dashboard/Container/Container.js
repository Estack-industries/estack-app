import React from 'react';

import './Container.css';

// var  -> expect type
// title -> string
// icon -> image path
// data -> string
// description -> string

const Container = ({ title, icon, data, description }) => {
	return (
		<div className="container">
			<div className="title-section">
				<p>{title}</p>
			</div>
			<div className="icon-and-data-section">
				<img src={icon} alt="icon" />
				<p>{data}</p>
			</div>
			<div className="description-section">
				<p>{description}</p>
			</div>
		</div>
	);
};

export default Container;
