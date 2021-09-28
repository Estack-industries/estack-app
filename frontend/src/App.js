import './App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './components/pages/Home/Home';
import About from './components/pages/About/About';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' exact component={About} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
