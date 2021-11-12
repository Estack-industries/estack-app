import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Axios from 'axios';
import PropertyUpload from './pages/PropertyUpload/propertyUpload'
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import WorkWithUs from './pages/WorkWithUs/WorkWithUs';
import AuthModal from './pages/AuthModal/AuthModal';
import Property from './pages/Property/Property';
import Footer from './components/Footer/Footer';
import Dashboard from './pages/Dashboard/Dashboard';
import './App.css';

function App() {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [apiResponse, setApiResponse] = useState(null);
	const [loggedIn,setLoggedIn] = useState('Log in')
	const [user, setUser] = useState('LogIn');

	useEffect(() => {
		if (user !== 'Log In') {
			setLoggedIn(true);
		}
	}, [user]);

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
				<Navbar
					onModalToggle={setIsModalOpen}
					text={user}
					loggedIn={loggedIn}
				/>
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/about" exact component={About} />
					<Route path="/workwithus" exact component={WorkWithUs} />
					<Route path="/property" exact component={Property} />

					<Route path='/sell/property-details' exact component = {PropertyUpload} />

					<Route path="/dashboard" exact component={Dashboard} />

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
