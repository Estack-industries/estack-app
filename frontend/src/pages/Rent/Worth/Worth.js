import React from 'react';
import Banner from '../Banner/Banner';
import TextField from '@mui/material/TextField';

import './Worth.css';

const Worth = ({formData, setFormData}) => {
	
	return (
		<div className="worth-cont">
			<Banner title={'Worth'} />
			<div className="worth-input">
				<TextField
					id='rent-monthlyRent'
					type='number'
					defaultValue={0}
					fullWidth
					label="Monthly Rent"
					InputProps={{
						startAdornment: <span style={{marginRight: '0.3em'}}>$</span>,
					}}
				/>
			</div>
			<div className="worth-input">
				<TextField
					id='rent-securityDeposit'
					type='number'
					defaultValue={0}
					fullWidth
					label="Secuirty Deposit"
					InputProps={{
						startAdornment: <span style={{marginRight: '0.3em'}}>$</span>,
					}}
				/>
			</div>
			<div className="worth-input">
				<TextField
					id='rent-cleaningFee'
					type='number'
					defaultValue={0}
					fullWidth
					label="Cleaning Fee"
					InputProps={{
						startAdornment: <span style={{marginRight: '0.3em'}}>$</span>,
					}}
					/>
			</div>
		</div>
	);
};

export default Worth;
