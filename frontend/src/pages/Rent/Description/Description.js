import React, { useState } from 'react';
import Banner from '../Banner/Banner';
import TextField from '@mui/material/TextField';

import './Description.css';

const Description = () => {
	const [description, setDescription] = useState('');

	return (
		<div className="description-cont">
			<Banner title={'Detailed Description'} />-
			<TextField
				className="description-input"
				fullwidth
				size="large"
				inputProps={{ style: { height: '400px' } }}
				multiline={true}
				label="Enter Description..."
				value={description}
				onChange={(e) => {
					setDescription(e.target.value);
					console.log(description);
				}}
			/>
			<button>Submit</button>
		</div>
	);
};

export default Description;
