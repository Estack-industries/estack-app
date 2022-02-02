import React, { useState } from 'react';
import Banner from '../Banner/Banner';
import TextField from '@mui/material/TextField';

import './Description.css';

const Description = () => {

	return (
		<div className="description-cont">
			<Banner title={'Detailed Description'} />
			<TextField
				id='rent-description'
				className="description-input"
				fullwidth='true'
				size="large"
				inputProps={{ style: { height: '400px' } }}
				multiline={true}
				label="Description"
			/>
			<button>Submit</button>
		</div>
	);
};

export default Description;
