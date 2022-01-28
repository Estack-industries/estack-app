import React, { useState } from 'react';
import Banner from '../Banner/Banner';
import TextField from '@mui/material/TextField';

import './Worth.css';

const Worth = () => {
	const [rent, setRent] = useState('');
	const [deposit, setDeposit] = useState('');
	const [cleaningFee, setCleaningFee] = useState('');
	return (
		<div className="worth-cont">
			<Banner title={'Worth'} />
			<div className="worth-input">
				<TextField
					fullWidth
					label="Monthly Rent"
					value={rent}
					onChange={(e) => {
						setRent(e.target.value);
					}}
				/>
			</div>
			<div className="worth-input">
				<TextField
					fullWidth
					label="Secuirty Deposit"
					value={deposit}
					onChange={(e) => {
						setDeposit(e.target.value);
					}}
				/>
			</div>
			<div className="worth-input">
				<TextField
					fullWidth
					label="Cleaning Fee"
					value={cleaningFee}
					onChange={(e) => {
						setCleaningFee(e.target.value);
					}}
				/>
			</div>
		</div>
	);
};

export default Worth;
