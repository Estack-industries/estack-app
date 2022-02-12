import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import { ReactToPdf } from 'react-to-pdf';

import Navbar from '../../components/Navbar/Navbar';
import NavBackground from '../../components/NavBackground';
import Footer from '../../components/Footer/Footer';
import Confetti from 'react-confetti';

import FrontPic from './assets/seller/front.png';
import leftIcon from './assets/seller/lefticon.png';
import centerIcon from '../Rent/Success/middle.png';
import optionOne from './assets/seller/addOpt1.png';
import optionTwo from './assets/seller/addOpt2.png';
import optionThree from './assets/seller/addOpt3.png';
import optionFour from './assets/seller/addOpt4.png';
import './SellSuccess.css';
import { ref } from 'joi';

export const ComponentToPrint = React.forwardRef((props, ref) => {
	return (
		<div ref={ref}>
			<div className="caseNum">
				<label style={{ float: 'left' }}>Case Number</label>
				<p style={{ color: 'black', float: 'right' }}>AA38743828347</p>
			</div>
			<div className="listDate">
				<label style={{ float: 'left' }}>Listed Date</label>
				<p style={{ color: 'black', float: 'right' }}>10/1/2020</p>
			</div>
			<div className="transactionDate">
				<label style={{ float: 'left' }}>Transaction Date</label>
				<p style={{ color: 'black', float: 'right' }}>9/1/2021</p>
			</div>
			<div className="status">
				<label style={{ float: 'left' }}>Transaction Status</label>
				<p style={{ color: '#F4A523', float: 'right' }}>Success</p>
			</div>
			<div className="agentName">
				<label style={{ float: 'left' }}>Agent</label>
				<p style={{ color: 'black', float: 'right' }}>Amy Cary</p>
			</div>
		</div>
	);
});

const Timeline = (props) => {
	const { items } = props;
	const totalItems = items.length;
	const numberOfActiveItems = items.filter((item) => item.active).length;
	const progressBarWidth =
		totalItems > 1
			? ((numberOfActiveItems - 1) / (totalItems - 1)) * 100
			: 0;

	return (
		<div className="timeline">
			<div
				className="timeline-progress"
				style={{ width: `${progressBarWidth}%` }}
			></div>
			<div className="timeline-items">
				{items.map((item, i) => (
					<div
						key={i}
						className={
							'timeline-item' + (item.active ? ' active' : '')
						}
					>
						<div className="timeline-content">{item.name}</div>
					</div>
				))}
			</div>
		</div>
	);
};

const items = [
	{
		name: 'Listed',
		active: true,
	},
	{
		name: 'Pre-sale Inspecting',
		active: true,
	},
	{
		name: 'Selling Disclosures',
		active: true,
	},
	{
		name: 'Open Escrow',
		active: true,
	},
	{
		name: 'Booked',
		active: true,
	},
];

function SellSuccess() {
	const componentRef = useRef();
	const handlePrint = useReactToPrint({
		content: () => componentRef.current,
	});

	return (
		<>
			<Navbar />
			<NavBackground />
			<main>
				<img src={FrontPic} className="intro" />
				<div className="large-space" />
				<div className="info-container">
					<div className="topIcons">
						<img src={leftIcon} className="leftIcon" />
						<img src={centerIcon} className="centerIcon" />
					</div>
					<Confetti
						width={1235}
						height={1800}
						opacity={0.9}
						gravity={0.07}
					/>
					<div className="progressLine">
						<Timeline items={items} />
					</div>
					<div className="message">
						<h1 style={{ fontSize: '4em', fontWeight: 'strong' }}>
							Congratulations!
						</h1>
						<h4 style={{ fontSize: '2.5em' }}>
							You have sold your
						</h4>
						<h4 style={{ fontSize: '2.5em' }}>property!</h4>
					</div>
					<div className="soldInfo">
						<ComponentToPrint ref={componentRef} />
					</div>
					<div className="options">
						<a href="#" className="pdf">
							{' '}
							Save as PDF{' '}
						</a>
						<a className="print" onClick={handlePrint}>
							Print Case File
						</a>
						<a className="mailto" href="mailto:user@test.com">
							Email Case File
						</a>
					</div>
					<h3 className="question">Still Have Questions?</h3>
					<div className="additionalOpts">
						<div className="one">
							<img src={optionOne} />
							<button type="button" className="btn">
								Contact Agent
							</button>
						</div>
						<div className="two">
							<img src={optionTwo} />
							<button type="button" className="btn">
								{' '}
								Customer Service{' '}
							</button>
						</div>
						<div className="three">
							<img src={optionThree} />
							<button type="button" className="btn">
								Contact Buyer
							</button>
						</div>
						<div className="four">
							<img src={optionFour} />
							<button type="button" className="btn">
								Contact Lawyer
							</button>
						</div>
					</div>
				</div>
				<div class="row">
					<div class="col-sm-12 text-center">
						<button type="button" class="btn btn-lg">
							Home
						</button>
						<button type="button" class="btn btn-lg">
							DashBoard
						</button>
					</div>
				</div>
			</main>
			<Footer />
		</>
	);
}

export default SellSuccess;
