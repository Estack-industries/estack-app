import React, { useState } from 'react';

import Navbar from '../../components/Navbar/Navbar';
import background from './background.png';
import NavBackground from '../../components/NavBackground';
import RequestForm from './RequestForm/RequestForm';
import ApprovedAlert from './ApprovedAlert/ApprovedAlert';
import Footer from '../../components/Footer/Footer';

const Appointment = () => {
	const [name, setName] = useState(null);
	const [email, setEmail] = useState(null);
	const [date, setDate] = useState(null);
	const [time, setTime] = useState(null);

	const [approved, setApproved] = useState(false);

	const handleNameChange = (newName) => {
		setName(newName);
		console.log(name);
	};
	const handleEmailChange = (newEmail) => {
		setEmail(newEmail);
		console.log(email);
	};
	const handleDateChange = (newDate) => {
		setDate(newDate);
		console.log(date);
	};
	const handleTimeChange = (newTime) => {
		setTime(newTime);
		console.log(time);
	};

	const handleClick = () => {
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
					handleClick={handleClick.bind(this)}
					handleNameChange={handleNameChange.bind(this)}
					handleEmailChange={handleEmailChange.bind(this)}
					handleDateChange={handleDateChange.bind(this)}
					handleTimeChange={handleTimeChange.bind(this)}
				/>
			) : (
				<ApprovedAlert />
			)}
			<Footer />
		</div>
	);
};

export default Appointment;
