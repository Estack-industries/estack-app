import React, { useState } from 'react';

import Navbar from '../../components/Navbar/Navbar';
import background from './background.png';
import NavBackground from '../../components/NavBackground';
import RequestForm from './RequestForm/RequestForm';
import ApprovedAlert from './ApprovedAlert/ApprovedAlert';
import Footer from '../../components/Footer/Footer';

const Appointment = () => {
	const [req, setReq] = useState({
		name: null,
		email: null,
		date: null,
		time: null,
	});

	const [error, setError] = useState('');

	const [approved, setApproved] = useState(false);

	const handleChange = (prop, value) => {
		setReq({ ...req, [prop]: value });
		console.log(req);
	};

	const handleSubmit = () => {
		//Check for null values in object
		for (const prop in req) {
			if (req[prop] === null) {  
				setError('Please fill out all the fields');
				return console.log(error);
			}
		}
		//Make post request to backend
		setApproved(true);
		console.log(approved);
	};

	return (
		<div>
			<Navbar />
			<h1
				className="apt-header"
				style={{
					paddingBottom: '6em',
					marginTop: '3em',
					textAlign: 'center',
				}}
			>
				We're Here To Help
			</h1>
			<NavBackground
				src={[{ src: background, width: 60, left: 20, top: 10 }]}
				opacity={0.9}
			/>

			{!approved ? (
				<RequestForm
					handleChange={handleChange.bind(this)}
					handleSubmit={handleSubmit.bind(this)}
					error={error}
				/>
			) : (
				<ApprovedAlert />
			)}
			<Footer />
		</div>
	);
};

export default Appointment;
