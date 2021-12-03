import React, { useState } from 'react';
import { Dialog, Tabs, Tab, Box, Typography, TextField } from '@mui/material';

import './RegisterAndLoginDialog.css';

function TabPanel(props) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`login-regsiter-tabpanel-${index}`}
			aria-labelledby={`login-register-tab-${index}`}
			{...other}
		>
			{value === index && (
				<Box sx={{ p: 3 }}>
					<Typography>{children}</Typography>
				</Box>
			)}
		</div>
	);
}

const RegisterAndLoginDialog = ({ isOpened, onSwitch }) => {
	const [isRegister, setIsRegister] = useState(0); // 0 = register; 1 = login
	const [emailInput, setEmailInput] = useState('');
	const [passwordInput, setpasswordInput] = useState('');

	const handleRegisterChange = (event, number) => {
		setIsRegister(number);
	};

	return (
		<Dialog
			open={isOpened}
			onClose={() => onSwitch(false)}
			fullWidth
			maxWidth={'sm'}
		>
			<div className="dialog-window">
				<div className="image-container">
					{isRegister === 1 && (
						<>
							<p>Welcome to</p>
							<p> E-Stack</p>
						</>
					)}
					{isRegister === 0 && (
						<>
							<p>Welcome back</p>
							<p>to</p>
							<p>E-Stack</p>
						</>
					)}
				</div>

				<Box className="register-login-container">
					<Box className="welcome-text">
						{isRegister === 1 && <p>Welcome to E-Stack</p>}
						{isRegister === 0 && <p>Welcome back!</p>}
					</Box>

					<Box>
						<Tabs
							value={isRegister}
							onChange={handleRegisterChange}
						>
							<Tab label="Sign In" />
							<Tab label="New Account" />
						</Tabs>
					</Box>

					<TabPanel value={isRegister} index={0}>
						<div className="email-input-container shadow">
							<TextField
								fullWidth
								variant="outlined"
								placeholder="Enter your Email Address"
								value={emailInput}
								onChange={(event) =>
									setEmailInput(event.target.value)
								}
							/>
						</div>
					</TabPanel>
					<TabPanel value={isRegister} index={1}>
						<h1>hello2</h1>
					</TabPanel>
				</Box>
			</div>
		</Dialog>
	);
};

export default RegisterAndLoginDialog;
