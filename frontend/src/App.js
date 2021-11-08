import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Axios from 'axios';

import Navbar from './components/Navbar/Navbar';
import Home from './components/pages/Home/Home';
import About from './components/pages/About/About';
import WorkWithUs from './components/pages/WorkWithUs/WorkWithUs';
import AuthModal from './components/pages/AuthModal/AuthModal';
import Property from './components/pages/Property/Property';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [apiResponse, setApiResponse] = useState(null);

	const [user, setUser] = useState('Log In');

	//Axios.defaults.withCredentials = true;

	useEffect(() => {
		(async () => {
			const response = await fetch('http://localhost:9000/testAPI');
			const text = await response.text();
			setApiResponse(text);
		})();
	}, []);

	useEffect(() => {
		Axios.get('http://localhost:3001/users/login').then((response) => {
			if (response.data.loggedIn === true) {
				console.log('I work');

				console.log(response.data.user.email);
			} else {
				console.log("I don't work");
			}
		});
	}, []);

	return (
		<div className="App">
			<Router>
				<Navbar onModalToggle={setIsModalOpen} text={user} />
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/about" exact component={About} />
					<Route path="/workwithus" exact component={WorkWithUs} />
					<Route path="/property" exact component={Property} />
				</Switch>
				<AuthModal
					isModalOpen={isModalOpen}
					onModalToggle={setIsModalOpen}
				/>
				<Footer />
			</Router>
		</div>
	);
}

export default App;
