import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';

import { EmailPassBox } from '../EmailPassBox/EmailPassBox';
import { SignInButton } from '../SignInButton/SignInButton';
import './NewAccountPage.css';
import {
	AUTH_EMAIL,
	AUTH_PASSWORD,
	AUTH_SOCIAL,
	AUTH_GOOGLE,
	AUTH_REGISTER_PASSWORD1,
	AUTH_REGISTER_PASSWORD2,
	AUTH_REGISTER_PASSWORD3,
	AUTH_REGISTER_PASSWORD4,
	AUTH_REGISTER_TERMS_ACCEPT,
	AUTH_REGISTER_TERMS_OF_USE,
} from '../constants/en.js';
import { GoogleButton } from '../GoogleButton/GoogleButton';

const NewAccountPage = ({ isOpen }) => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const [loginStatus, setLoginStatus] = useState('');
	const [isNotMatch, setIsNotMatch] = useState(false);
	const [isEmailValid, setIsEmailValid] = useState(true);
	const [isPasswordValid, setIsPasswordValid] = useState(true);
	//submit to the api
	const submitData = () => {
		Axios.post('http://localhost:3001/users/register', {
			email: email,
			password: password,
		}).then(
			(response) => {
				console.log(response);
			}
		);
	};

	const checkEmailValid = (email) => {
		var pattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		console.log(email)
		if(pattern.test(email)){
			setIsEmailValid(true);
		}else{
			console.log("wrong email pattern");
			setIsEmailValid(false);
		}
	}

	const checkPasswordValid = (password) => {
		var pattern = /^(?![a-zA-Z]+$)(?![A-Z0-9]+$)(?![A-Z\\W_!@#$%^&*`~()-+=]+$)(?![a-z0-9]+$)(?![a-z\\W_!@#$%^&*`~()-+=]+$)(?![0-9\\W_!@#$%^&*`~()-+=]+$)[a-zA-Z0-9\\W_!@#$%^&*`~()-+=]{8,30}$/;
		if(pattern.test(password)){
			setIsPasswordValid(true);
		}else{
			setIsPasswordValid(false);
		}
	}

	const checkConfirmPassword = (password, confirmPassword) => {
		if(password == confirmPassword){
			setIsNotMatch(false);
		}else{
			setIsNotMatch(true);
		}
	}

	//check the api for user
	const checkData = () => {
		setLoginStatus('');

		Axios.post('http://localhost:3001/users/Auth', { email: email }).then(
			(response) => {
				console.log(response);
				if (response.data.message === 'User already exists') {
					setLoginStatus(response.data.message);
				} else {
					//console.log(loginStatus)
					checkPasswordValid(password);
					checkEmailValid(email);
					checkConfirmPassword(password, confirmPassword);
					if(!isNotMatch && isPasswordValid && isEmailValid){
						submitData();
					}
				}
			}
		);
	};

	return (
		<>
			<div
				className="contentContainer"
				style={{
					display: isOpen ? 'none' : 'block',
				}}
			>
				{/* Emaill & Password */}
				<h3 className="authEmail">
					Email <span className="Warning-Text">{loginStatus}</span>
				</h3>
				<EmailPassBox
					text={AUTH_EMAIL}
					onChange={(e) => {
						setEmail(e.target.value);
					}}
				/>
				<span id='emailFormatMessage' style={{
				display: isEmailValid ?  'none' : 'flex', color: 'red'
				}}>Incorrect Email Format: username@domain.tail</span>
				<h3 className="authPassword">Password</h3>
				<EmailPassBox
					text={AUTH_PASSWORD}
					onChange={(e) => {
						setPassword(e.target.value);
					}}
				/>
				<span id='passwordFormatMessage' style={{
				display: isPasswordValid ? 'none':'flex', color: 'red'
				}}>Incorrect Password Format</span>
				<h3 className="authConfirmPassword">Confirm Password</h3>
				<EmailPassBox 
					text={AUTH_PASSWORD} 
					onChange={(e) =>{
						setConfirmPassword(e.target.value);
					}}
				/>
				<span id='matchMessage' style={{
				display: isNotMatch ? 'flex' : 'none', color: 'red'
				}}>Passwords must match</span>
				<div className="authPasswordRequirements">
					<p>{AUTH_REGISTER_PASSWORD1}</p>
					<p>{AUTH_REGISTER_PASSWORD2}</p>
					<p>{AUTH_REGISTER_PASSWORD3}</p>
					<div style={{ display: 'flex' }}>
						<hr className="registerPassword4Box" />
						<p className="registerPassword4Container">
							{AUTH_REGISTER_PASSWORD4}
						</p>
					</div>
				</div>
				<div className="newAccountSignInButton">
					<SignInButton text="Submit" onClick={checkData} />
				</div>
				<div className="terms">
					<p>
						{AUTH_REGISTER_TERMS_ACCEPT}
						<Link to="#" className="termsOfUse">
							{AUTH_REGISTER_TERMS_OF_USE}
						</Link>
					</p>
				</div>
				{/* Social Authentication */}
				<hr className="hrLineTwo" />
				<div className="authSocialText">{AUTH_SOCIAL}</div>
				<GoogleButton text={AUTH_GOOGLE} />
			</div>
		</>
	);
};

export default NewAccountPage;
