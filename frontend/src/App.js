import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.css";

import './App.css';
import Landing from './pages/Landing/Landing';
import About from './pages/About/About';
import Plans from './pages/Plans/Plans';

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
			</Switch>
		</Router>
	);
}

export default App;
