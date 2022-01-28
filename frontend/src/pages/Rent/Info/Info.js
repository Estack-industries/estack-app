import React, { useState } from 'react';
import Banner from '../Banner/Banner';
import TextField from '@mui/material/TextField';
import DateInput from '../DateInput/DateInput';

import './Info.css';

const Info = () => {
	const [address, setAddress] = useState('');
	const [propertyType, setPropertyType] = useState('');
	const [yearBuilt, setYearBuilt] = useState('');
	const [bedrooms, setBedrooms] = useState('');
	const [squareFootage, setSquareFootage] = useState('');
	const [bathrooms, setBathrooms] = useState('');
	const [leaseDuration, setLeaseDuration] = useState('');
	const [dateAvailable, setDateAvailable] = useState('');

	return (
		<div className="info-cont">
			<Banner title={'Information & Details'} />
			<div className="info-input" id="first-input">
				<TextField
					fullWidth
					label="Address"
					variant="outlined"
					value={address}
					onChange={(e) => {
						setAddress(e.target.value);
					}}
				/>
			</div>
			<div className="info-input">
				<TextField
					fullWidth
					label="Property Type"
					variant="outlined"
					value={propertyType}
					onChange={(e) => {
						setPropertyType(e.target.value);
					}}
				/>
			</div>
			<div className="info-input">
				<TextField
					fullWidth
					label="Year Built"
					variant="outlined"
					value={yearBuilt}
					onChange={(e) => {
						setYearBuilt(e.target.value);
					}}
				/>
			</div>
			<div className="info-input">
				{' '}
				<TextField
					fullWidth
					label="Bedrooms"
					variant="outlined"
					value={bedrooms}
					onChange={(e) => {
						setBedrooms(e.target.value);
					}}
				/>
			</div>
			<div className="info-input">
				<TextField
					fullWidth
					label="Square Footage"
					variant="outlined"
					value={squareFootage}
					onChange={(e) => {
						setSquareFootage(e.target.value);
					}}
				/>
			</div>
			<div className="info-input">
				<TextField
					fullWidth
					label="Bathrooms"
					variant="outlined"
					value={bathrooms}
					onChange={(e) => {
						setBathrooms(e.target.value);
					}}
				/>
			</div>
			<div className="info-input">
				{' '}
				<TextField
					fullWidth
					label="Lease Duration"
					variant="outlined"
					value={leaseDuration}
					onChange={(e) => {
						setLeaseDuration(e.target.value);
					}}
				/>
			</div>
			<div className="info-input">
				<DateInput
					value={dateAvailable}
					onChange={(e) => {
						setDateAvailable(e.target.value);
					}}
				/>
			</div>
		</div>
	);
};

export default Info;
