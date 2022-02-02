import React from 'react';
import Banner from '../Banner/Banner';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

import './Info.css';

const Info = () => {

	return (
		<div className="info-cont">
			<Banner title={'Information & Details'} />
			<div className="info-input" id="first-input">
				<TextField
					id='rent-property_name'
					fullWidth
					label="Property Name"
					variant="outlined"
				/>
			</div>
			<div className="info-input">
				<TextField
					id='rent-street'
					fullWidth
					label="Street Address"
					variant="outlined"
				/>
			</div>
			<div className="info-input">
				<TextField
					id='rent-city'
					fullWidth
					label="City"
					variant="outlined"
				/>
			</div>
			<div className="info-input">
				<TextField
					id='rent-state'
					fullWidth
					label="State"
					variant="outlined"
				/>
			</div>
			<div className="info-input">
				<TextField
					id='rent-zip'
					fullWidth
					label="Zip Code"
					variant="outlined"
				/>
			</div>
			<div className="info-input">
				<Autocomplete
					id='rent-type'
					fullWidth
					variant="outlined"
					options={[
						{value: 'House', label: 'House'},
						{value: 'Apartment', label: 'Apartment'},
						{value: 'Condo', label: 'Condo'},
						{value: 'Townhouse', label: 'Townhouse'},
						{value: 'Duplex', label: 'Duplex'},
						{value: 'Multi-Family', label: 'Multi-Family'},
						{value: 'Other', label: 'Other'},
					]}
					renderInput={(params) => <TextField {...params} label="Property Type" />}
				/>
			</div>
			<div className="info-input">
				<TextField
					id='rent-yearBuilt'
					type='number'
					defaultValue={new Date().getFullYear()}
					fullWidth
					label="Year Built"
					variant="outlined"
				/>
			</div>
			<div className="info-input">
				{' '}
				<TextField
					id='rent-numBedrooms'
					type='number'
					defaultValue={0}
					fullWidth
					label="Bedrooms"
					variant="outlined"
				/>
			</div>
			<div className="info-input">
				<TextField
					id='rent-squareft'
					type='number'
					defaultValue={0}
					fullWidth
					label="Square Footage"
					variant="outlined"
				/>
			</div>
			<div className="info-input">
				<TextField
					id='rent-numBathrooms'
					type='number'
					defaultValue={0}
					fullWidth
					label="Bathrooms"
					variant="outlined"
				/>
			</div>
			<div className="info-input">
				<TextField
					id='rent-leaseDuration'
					fullWidth
					label="Lease Duration"
					variant="outlined"
				/>
			</div>
			<div className="info-input">
				<TextField
					id='rent-dateAvailable'
					type='date'
					defaultValue={new Date().toISOString().substr(0, 10)}
					fullWidth
					label="Date Available"
					variant="outlined"
				/>
			</div>
		</div>
	);
};

export default Info;
