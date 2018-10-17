import React, {Component} from 'react';
import './App.css';
import {BrowserRouter, Route, Switch, NavLink} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import People from './People';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <ul style={{display: 'flex', listStyle: 'none'}}>
            <li style={{marginRight: 10}}>
              <NavLink to="/">Home</NavLink>
            </li>
            <li style={{marginRight: 10}}>
              <NavLink to="/about">About</NavLink>
            </li>
            <li style={{marginRight: 10}}>
              <NavLink to="/contact">Contact</NavLink>
            </li>
            <li style={{marginRight: 10}}>
              <NavLink to="/people">People</NavLink>
            </li>
          </ul>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/people" component={People} />
            <Route render={() => {
              return <h1>Page not found!</h1>
            }} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;