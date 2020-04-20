import React, { Component } from 'react';
import './App.css';
import Home from './Components/Options/Home';
import AboutMe from './Components/Options/AboutMe';
import Contact from './Components/Options/Contact';
import Gallery from './Components/Options/Gallery';
import BurgerButton from './Components/SideNav/BurgerButton';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


class App extends Component {
  render() {
    return (
        <div style={{ height: '100%' }}>
          <head>
            <title>Judy Zhang</title>
          </head>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/AboutMe" component={AboutMe} />
            <Route path="/Contact" component={Contact} />
            <Route path="/Gallery" component={Gallery} />
          </Switch>
        </div>
    );
  }
}

export default App;
