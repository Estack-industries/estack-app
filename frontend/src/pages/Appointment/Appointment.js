import React, { Component } from 'react';

import Navbar from '../../components/Navbar/Navbar';
import background from './background.png';
import NavBackground from '../../components/NavBackground';
import RequestForm from './RequestForm/RequestForm';
import ApprovedAlert from './ApprovedAlert/ApprovedAlert';
import Footer from '../../components/Footer/Footer';

class Appointment extends Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
		this.state = {
			approved: false,
		};
	}

	handleClick() {
		this.setState({ approved: true });
		// e.preventDefault();
		console.log(this.state.approved);
	}

	render() {
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

				{!this.state.approved ? (
					<RequestForm handleClick={this.handleClick.bind(this)} />
				) : (
					<ApprovedAlert />
				)}
				<Footer />
			</div>
		);
	}
}

export default Appointment;
