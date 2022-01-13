import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Axios from "axios";
import "bootstrap/dist/css/bootstrap.css";

import './App.css';
import Landing from './pages/Landing/Landing';
import About from './pages/About/About';
import Plans from './pages/Plans/Plans';
import Dashboard from './pages/Dashboard/Dashboard';
import Account from './pages/Account';

function App() {
	return (
		<Router>
			<Switch>
				<Route exact path="/">
					<About />
				</Route>
				<Route path="/plans">
					<Plans />
				</Route>
				<Route path="/dashboard">
					<Dashboard />
				</Route>
				<Route path="/account">
					<Account />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
