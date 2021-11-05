import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/pages/Home/Home';
import About from './components/pages/About/About';
import WorkWithUs from './components/pages/WorkWithUs/WorkWithUs';
import AuthModal from './components/pages/AuthModal/AuthModal';
import Property from './components/pages/Property/Property';
import Footer from './components/Footer/Footer';
import { useEffect } from 'react';

import './App.css';


function App() {
	const [isModalOpen, onModalToggle] = useState(false);
	const [apiResponse, setApiResponse] = useState(null);
	


	

	useEffect(() => {
		(async () => {
			const response = await fetch('http://localhost:9000/testAPI');
			const text = await response.text();
			setApiResponse(text);
		})();
	}, []); 
	
	

	return (
		<div className="App">
			<Router>
				<Navbar onModalToggle={onModalToggle} />
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/about" exact component={About} />
					<Route path="/workwithus" exact component={WorkWithUs} />
					<Route path="/property" exact component={Property} />
				</Switch>
				<AuthModal
					isModalOpen={isModalOpen}
					onModalToggle={onModalToggle}
				/>
				<Footer />
			</Router>
		</div>
	);
}

export default App;




