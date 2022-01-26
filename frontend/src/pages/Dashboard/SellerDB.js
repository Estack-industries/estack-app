import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { CalendarComponent } from '@syncfusion/ej2-react-calendars';
import Navbar from '../../components/Navbar/Navbar';
import Background from '../../components/NavBackground';
import Footer from '../../components/Footer/Footer';

import Data from './exampleData.json';
import './sellerdb.css';

import FrontPic from './assets/seller/front.png';
import Line from './assets/seller/Line 85.png';
import Divider from './assets/seller/divider.png';
import Graph from './assets/seller/graph.png';
import Topbar from './components/Topbar/Topbar';
import Sidebar from './components/Sidebar/Sidebar';
import Map from './components/Map/Map';
import Percentage from './assets/seller/percentage.png';
import LineChart from './components/Chart/Chart';
import Calendar from './components/Calendar/Calendar';
import DonutChart from './components/Chart/DonutChart';

function Carousel() {
	return (
		<div clasName="carousel">
			<h1 className="title">Dashboard</h1>
			<div
				id="carouselExampleControls"
				className="carousel slide"
				data-bs-ride="false"
			>
				<div className="carousel-inner">
					<div className="carousel-item active">
						<img
							src={FrontPic}
							className="first d-block w-100"
							alt="temp"
						/>
					</div>
				</div>
				<button
					className="carousel-control-prev"
					type="button"
					data-bs-target="#carouselExampleControls"
					data-bs-slide="prev"
				>
					<span
						className="carousel-control-prev-icon"
						aria-hidden="true"
					></span>
					<span className="visually-hidden">Previous</span>
				</button>
				<button
					className="carousel-control-next"
					type="button"
					data-bs-target="#carouselExampleControls"
					data-bs-slide="next"
				>
					<span
						className="carousel-control-next-icon"
						aria-hidden="true"
					></span>
					<span className="visually-hidden">Next</span>
				</button>
			</div>
		</div>
	);
}

function MainPanel() {
	return (
		<div className="row row-cols-1 row-cols-md-4">
			{Data.Panel.map((post) => {
				return (
					<div className="col">
						<div className="card h-100">
							<h3 className="card-title">{post.title}</h3>
							<div className="small-space" />
							<div className="card-block">
								<div class="colIcon">
									<img src={post.icon} alt="icon" />
								</div>
								<div class="colDetail">
									<h5 className="detail">{post.detail}</h5>
								</div>
							</div>
							<h5 className="detail">{post.conclusion}</h5>
						</div>
					</div>
				);
			})}
		</div>
	);
}

function MenuButtons() {
	return (
		<div className="row row-cols-1 row-cols-md-4">
			<div className="col">
				<button type="button" class="btn-block position-relative">
					<a href="#">Edit Home </a>
				</button>
			</div>
			<div className="col">
				<button type="button" class="btn-block position-relative">
					<a href="#">Messages </a>
					<span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
						{' '}
						1<span class="visually-hidden">New alerts</span>
					</span>
				</button>
			</div>
			<div className="col">
				<button type="button" class="btn-block position-relative">
					<a href="#">Agent</a>
					<span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
						{' '}
						1<span class="visually-hidden">New alerts</span>
					</span>
				</button>
			</div>
			<div className="col">
				<button type="button" class="btn-block position-relative">
					<a href="#">My Likes </a>
				</button>
			</div>
		</div>
	);
}

const location = {
	address: '525 W 17th St, National City, California',
	lat: 32.66686,
	lng: -117.10919,
};

function SellerDB() {
	return (
		<>
			<Background />
			<Navbar />
			<main>
				<Carousel />
				<MainPanel />
				<img className="line" src={Line} />
				<h2 className="header">E-Stack Estimate For 30 Future St. </h2>
				<MenuButtons />
				<div class="section">
					<img className="line" src={Line} alt="line" />
					<img className="half" src={Divider} alt="divider" />
				</div>
				<div class="card">
					<div class="card-body">Dashboard</div>
				</div>
				<div>
					<Topbar />
					<Sidebar />
					<div className="board">other</div>
				</div>
				<div className="col text-center">
					<a href="#">
						<button className="btn-danger">Delete Listing</button>
					</a>
				</div>
				<div className="map"></div>
				<img className="line" src={Line} alt="line" />
				<Map location={location} zoomLevel={17} />
				<img className="line" src={Line} alt="line" />
				<div className="visitstats">
					<h2 className="head">Total Vists</h2>
					<h5 className="description">
						How many timess your home is seen in the past year{' '}
						<img className="percent" src={Percentage} />
					</h5>
					<div className="chart">
						<LineChart />
						<div className="cal">
							<Calendar />
						</div>
					</div>
				</div>
				<div class="float-container">
					<div id="st-box">
						<DonutChart />
					</div>
					<div id="nd-box">
						<img src={Graph} />
					</div>
					<div id="rd-box">
						<p> active percentage</p>
					</div>
				</div>
			</main>
			<Footer />
		</>
	);
}

export default SellerDB;