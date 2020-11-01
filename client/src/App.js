import './App.css';
import {About} from './components/About';
import {Portfolio} from './components/Portfolio';
import Nav from './components/Nav';
import Home from './components/Home';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  const myPic = '../'
  return (
    <Router>
    <div className="App">
        <Nav />
        <Switch>
        <Route exact path="/" component={ Home }/> 
        <Route exact path="/about" component={ About }/>
        <Route exact path="/portfolio" component={ Portfolio }/>
        </Switch>

    </div>
    </Router>
  );
}



export default App;
