import React, { useState } from 'react';

import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import './RequestForm.css';

const RequestForm = ({
	handleChange,
	handleSubmit,
	// handleNameChange,
	// handleEmailChange,
	// handleDateChange,
	// handleTimeChange,
}) => {
	return (
		<div className="req-form-cont">
			<div className="req-form">
				<h1>Request An Appointment</h1>
				<div className="req-input">
					<TextField
						fullWidth
						name="name"
						label="Full Name"
						variant="outlined"
						onChange={(e) => {
							handleChange(e.target.name, e.target.value);
						}}
					/>
				</div>
				<div className="req-input">
					<TextField
						fullWidth
						name="email"
						label="Email"
						variant="outlined"
						onChange={(e) => {
							handleChange(e.target.name, e.target.value);
						}}
					/>
				</div>
				<div className="req-input">
					<TextField
						id="rent-dateAvailable"
						type="date"
						name="date"
						defaultValue={new Date().toISOString().substr(0, 10)}
						fullWidth
						label="Date Available"
						variant="outlined"
						onChange={(e) => {
							handleChange(e.target.name, e.target.value);
						}}
					/>
				</div>
				<div className="req-input">
					<TextField
						fullWidth
						name="time"
						label="Time"
						variant="outlined"
						onChange={(e) => {
							handleChange(e.target.name, e.target.value);
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
						onClick={handleSubmit}
					>
						Submit
					</Button>
				</Box>
			</div>
		</div>
	);
};

export default RequestForm;
