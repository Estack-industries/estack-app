import React from 'react';
import Banner from '../Banner/Banner';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

import './Amenities.css';

const Amenities = ({formData, setFormData}) => {

	return (
		<div className="amenities-cont">
			<Banner title={'Amenities & Rules'} />
			<FormControlLabel
				id='rent-ac'
				className="amenities-input"
				control={<Checkbox />}
				label="A/C"
			/>
			<FormControlLabel
				id='rent-furnished'
				className="amenities-input"
				control={<Checkbox />}
				label="Furnished"
			/>
			<FormControlLabel
				id='rent-balcony'
				className="amenities-input"
				control={<Checkbox />}
				label="Balcony or deck"
			/>
			<FormControlLabel
				id='rent-hardWood'
				className="amenities-input"
				control={<Checkbox />}
				label="Hardwood floors"
			/>
			<FormControlLabel
				id='rent-wheelChairAcces'
				className="amenities-input"
				control={<Checkbox />}
				label="Disability access"
			/>
			<FormControlLabel
				id='rent-pets'
				className="amenities-input"
				control={<Checkbox />}
				label="Pets allowed"
			/>
			<FormControlLabel
				id='rent-garageParking'
				className="amenities-input"
				control={<Checkbox />}
				label="Garage parking"
			/>
			<FormControlLabel
				id='rent-offStreetParking'
				className="amenities-input"
				control={<Checkbox />}
				label="Off-street parking"
			/>
		</div>
	);
};

export default Amenities;
