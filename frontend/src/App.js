import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Axios from "axios";
import "bootstrap/dist/css/bootstrap.css";

import './App.css';
import Landing from './pages/Landing/Landing';
import About from './pages/About/About';
import Plans from './pages/Plans/Plans';
import Dashboard from './pages/Dashboard/Dashboard';
import SellerDB from './pages/Dashboard/SellerDB';
import Account from './pages/Account';
import AccountMessages from './pages/Account/Messages';
import UploadRent from './pages/Rent/Rent';
import AccountSetting from './pages/AccountSettings/AccountSettings';
import Banking from './pages/Banking/Banking';
import Property from './pages/Property/Property';
import Success from './pages/Rent/Success/success';
import SellSuccess from './pages/Dashboard/SellSuccess';

function App() {
	return (
		<Router>
			<Switch>
				<Route exact path="/">
					<Landing />
				</Route>
				<Route path="/about-us">
					<About />
				</Route>
				<Route path="/plans">
					<Plans />
				</Route>
				<Route path="/dashboard">
					<Dashboard />
				</Route>
				<Route path="/sellerdashboard">
					<SellerDB />
				</Route>
				<Route path="/seller/success">
					<SellSuccess />
				</Route>
				<Route exact path="/account">
					<Account />
				</Route>
				<Route path="/account/messages">
					<AccountMessages />
				</Route>
				<Route path="/account/settings">
					<AccountSetting />
				</Route>
				<Route path="/upload/rent">
					<UploadRent />
				</Route>
				<Route path="/rent/success">
					<Success />
				</Route>
				<Route path="/banking">
					<Banking />
				</Route> 
				<Route path="/property/:id" component={Property}/>
			</Switch>
		</Router>
	);
}

export default App;
