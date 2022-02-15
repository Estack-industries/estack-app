import React, { useState } from 'react';
import {
	Dialog,
	Tabs,
	Tab,
	Typography,
	TextField,
	Button,
	Link,
	Divider,
} from '@mui/material';
import Joi from 'joi';

import './RegisterAndLoginDialog.css';
import AppleLogin from './assets/apple-login.svg';
import FacebookLogin from './assets/facebook-login.svg';
import GoogleLogin from './assets/google-login.svg';
import RegisterWave from './assets/register-wave.png';

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
				<div sx={{ p: 3 }}>
					<Typography>{children}</Typography>
				</div>
			)}
		</div>
	);
}

function ThirdPartiesLogin() {
	return (
		<div className="third-parties-login">
			<p>or connect with:</p>
			<img
				src={FacebookLogin}
				alt="facebook-login"
				onClick={() => console.log('clicked')}
			/>
			<img
				src={GoogleLogin}
				alt="google-login"
				onClick={() => console.log('clicked')}
			/>
			<img
				src={AppleLogin}
				alt="apple-login"
				onClick={() => console.log('clicked')}
			/>
		</div>
	);
}

const registerLoginSchema = Joi.object({
	email: Joi.string()
		.email({ tlds: { allow: false } })
		.required(),
	password: Joi.string()
		.min(8)
		.required()
		.pattern(
			new RegExp(
				'^(?=.*[a-z])(?=.*[A-Z])(?=.*d)(?=.*[@$!%*?&])[A-Za-zd@$!%*?&]{8,}$'
			)
		),
});

const RegisterAndLoginDialog = ({ isOpened, onSwitch }) => {
	const [isRegister, setIsRegister] = useState(0); // 0 = register; 1 = login
	const [emailInput, setEmailInput] = useState('');
	const [passwordInput, setpasswordInput] = useState('');

	const handleRegisterChange = (event, number) => {
		setIsRegister(number);
	};

	const handleRegister = () => {
		(async () => {
			try {
				const info = {
					email: emailInput,
					password: passwordInput,
				};
				const ok = registerLoginSchema.validate(info);
				if (ok.error) {
					throw new Error(ok.error);
				}

				const response = await fetch('/register', {
					method: 'POST',
					body: info,
				});
			} catch (err) {
				console.error(err);
				return;
			}
		})();
	};

	const handleSignIn = () => {
		(async () => {
			try {
				const info = {
					email: emailInput,
					password: passwordInput,
				};
				const ok = registerLoginSchema.validate(info);
				if (ok.error) {
					throw new Error(ok.error);
				}

				const response = await fetch('/login', {
					method: 'POST',
					body: info,
				});
			} catch (err) {
				console.error(err);
				return;
			}
		})();
	};

	function InputField() {
		return (
			<>
				<div className="email-container">
					<p>Email</p>
					<input
						className='input-container'
						placeholder="Enter your Email Address"
						value={emailInput}
						onChange={(event) => {
							event.preventDefault();
							setEmailInput(event.target.value);
						}}
					/>
				</div>

				<div className="password-container">
					<p>Password</p>
					<input
						className='input-container'
						placeholder="Enter your Password"
						value={passwordInput}
						onChange={(event) => {
							event.preventDefault();
							setpasswordInput(event.target.value);
						}}
						type="password"
					/>
				</div>
			</>
		);
	}

	return (
		<Dialog
			open={isOpened}
			onClose={() => onSwitch(false)}
			fullWidth
			maxWidth={'sm'}
		>
			<div className="dialog-window">
				<img src={RegisterWave} alt=''/>
				<div className="image-container">
					{isRegister === 1 && (
						<>
							<p>Welcome to</p>
							<p>E-Stack</p>
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

				<div className="register-login-container">
					<div className="welcome-text">
						{isRegister === 1 && (
							<p>
								Welcome to E-Stack
							</p>
						)}
						{isRegister === 0 && (
							<p>
								Welcome back!
							</p>
						)}
					</div>
					<Divider />

					<div>
						<Tabs
							value={isRegister}
							onChange={handleRegisterChange}
						>
							<Tab label="Sign In" />
							<Tab label="New Account" />
						</Tabs>
					</div>

					<TabPanel value={isRegister} index={0}>
						<InputField />
						<Button
							fullWidth
							variant="contained"
							onClick={handleSignIn}
						>
							Sign In
						</Button>
						<span style={{display: 'flex', justifyContent: 'center', margin: '1em 0em'}}>
							<Link underline="none" href="#">
								forgot your password?
							</Link>
						</span>

						<Divider />
						<ThirdPartiesLogin />
					</TabPanel>

					<TabPanel value={isRegister} index={1}>
						<InputField />
						<p className="hint-text">
							At least 8 characters
						</p>
						<p className="hint-text">
							At least 1 special character
						</p>
						<p className="hint-text">
							At least 1 lowercase letter and 1 upper case letter
						</p>
						<Button
							fullWidth
							variant="contained"
							onClick={handleRegister}
						>
							Submit
						</Button>
						<p className="hint-text" style={{textAlign: 'center'}}>
							By submitting, I accept Estack’s{' '}
							<Link underline="none" href="#">
								terms of use
							</Link>
						</p>

						<Divider />
						<ThirdPartiesLogin />
					</TabPanel>
				</div>
			</div>
		</Dialog>
	);
};

export default RegisterAndLoginDialog;
