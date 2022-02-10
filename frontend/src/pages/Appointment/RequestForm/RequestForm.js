import React, { useState } from 'react';

import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import './RequestForm.css';

const RequestForm = ({ handleClick }) => {
	const [name, setName] = useState(null);
	const [email, setEmail] = useState(null);
	const [date, setDate] = useState(null);
	const [time, setTime] = useState(null);

	return (
		<div className="req-form-cont">
			<div className="req-form">
				<h1>Request An Appointment</h1>
				<div className="req-input">
					<TextField
						fullWidth
						label="Full Name"
						variant="outlined"
						value={name}
						onChange={(e) => {
							setName(e.target.value);
						}}
					/>
				</div>
				<div className="req-input">
					<TextField
						fullWidth
						label="Email"
						variant="outlined"
						value={email}
						onChange={(e) => {
							setEmail(e.target.value);
						}}
					/>
				</div>
				<div className="req-input">
					<TextField
						id="rent-dateAvailable"
						type="date"
						defaultValue={new Date().toISOString().substr(0, 10)}
						fullWidth
						label="Date Available"
						variant="outlined"
					/>
				</div>
				<div className="req-input">
					<TextField
						fullWidth
						label="Time"
						variant="outlined"
						value={time}
						onChange={(e) => {
							setTime(e.target.value);
						}}
					/>
				</div>
				<Box textAlign="center">
					<Button
						variant="outlined"
						size="large"
						style={{
							color: 'white',
							borderColor: 'white',
						}}
						onClick={handleClick}
					>
						Submit
					</Button>
				</Box>
			</div>
		</div>
	);
};

export default RequestForm;
