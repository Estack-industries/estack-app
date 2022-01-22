import React from 'react';

import './App.css';
import Landing from './pages/Landing/Landing';
import About from './pages/About/About';
import Banking from './pages/Banking/Banking';
import Property from './pages/Property/Property';
import AccountSetting from './pages/AccountSettings/AccountSettings';

function App() {
	return (
		<div style={{ padding: 0, margin: 0 }}>
			<Property />
		</div>
	);
}

export default App;
