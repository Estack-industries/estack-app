import React, { useState } from 'react';
import Banner from '../Banner/Banner';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

import './Amenities.css';

const Amenities = () => {
	const [AC, setAC] = useState(false);
	const [furnished, setFurnished] = useState(false);
	const [balcony, setBalcony] = useState(false);
	const [woodFloor, setWoodFloor] = useState(false);
	const [disabilityAccess, setDisabilityAccess] = useState(false);
	const [pets, setPets] = useState(false);
	const [gargeParking, setGarageParking] = useState(false);
	const [streetParking, setStreetParking] = useState(false);

	return (
		<div className="amenities-cont">
			<Banner title={'Amenities & Rules'} />
			<FormControlLabel
				className="amenities-input"
				control={<Checkbox />}
				label="A/C"
				onChange={() => {
					setAC(!AC);
					console.log(AC);
				}}
			/>
			<FormControlLabel
				className="amenities-input"
				control={<Checkbox />}
				label="Furnished"
				onChange={() => {
					setFurnished(!furnished);
				}}
			/>
			<FormControlLabel
				className="amenities-input"
				control={<Checkbox />}
				label="Balcony or deck"
				onChange={() => {
					setBalcony(!balcony);
				}}
			/>
			<FormControlLabel
				className="amenities-input"
				control={<Checkbox />}
				label="Hardwood floors"
				onChange={() => {
					setWoodFloor(!woodFloor);
				}}
			/>
			<FormControlLabel
				className="amenities-input"
				control={<Checkbox />}
				label="Disability access"
				onChange={() => {
					disabilityAccess(!setDisabilityAccess);
				}}
			/>
			<FormControlLabel
				className="amenities-input"
				control={<Checkbox />}
				label="Pets allowed"
				onChange={() => {
					setPets(!pets);
				}}
			/>
			<FormControlLabel
				className="amenities-input"
				control={<Checkbox />}
				label="Garage parking"
				onChange={() => {
					setGarageParking(!gargeParking);
				}}
			/>
			<FormControlLabel
				className="amenities-input"
				control={<Checkbox />}
				label="Off-street parking"
				onChange={() => {
					setStreetParking(!streetParking);
				}}
			/>
		</div>
	);
};

export default Amenities;
