import React, { useState } from 'react';

import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import './RequestForm.css';

const RequestForm = ({

	handleClick,
	handleNameChange,
	handleEmailChange,
	handleDateChange,
	handleTimeChange,
	
}) => {

	return (
		<div className="req-form-cont">
			<div className="req-form">
				<h1>Request An Appointment</h1>
				<div className="req-input">
					<TextField
						fullWidth
						label="Full Name"
						variant="outlined"
						onChange={(e) => {
							handleNameChange(e.target.value);
						}}
					/>
				</div>
				<div className="req-input">
					<TextField
						fullWidth
						label="Email"
						variant="outlined"
						onChange={(e) => {
							handleEmailChange(e.target.value);
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
						onChange={(e) => {
							handleDateChange(e.target.value);
						}}
					/>
				</div>
				<div className="req-input">
					<TextField
						fullWidth
						label="Time"
						variant="outlined"
						onChange={(e) => {
							handleTimeChange(e.target.value);
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
