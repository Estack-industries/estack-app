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

	const [approved, setApproved] = useState(false);

	const handleChange = (prop, value) => {
		setReq({ ...req, [prop]: value });
		console.log(req);
	};

	const handleSubmit = () => {
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
				/>
			) : (
				<ApprovedAlert />
			)}
			<Footer />
		</div>
	);
};

export default Appointment;
