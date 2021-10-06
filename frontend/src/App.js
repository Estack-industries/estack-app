import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home/Home';
import About from './components/pages/About/About';
import WorkWithUs from './components/pages/WorkWithUs/WorkWithUs';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' exact component={About} />
          <Route path='/workwithus' exact component={WorkWithUs} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
