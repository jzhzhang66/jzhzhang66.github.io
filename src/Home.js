import React, { Component } from 'react';
import './App.css';
import image from './cover.jpg';
import MenuBar from './Menu';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Contact from './Contact'

class Home extends Component {
  render() {
    return (
        <Router>
        <div className="cover" style={{ backgroundImage: `url(${image})` }}>
          <MenuBar />
          <head>
            <title>Judy Zhang</title>
          </head>
          <body>
          </body>
        </div>
        </Router>
    );
  }
}

export default Home;

/*  render() {
    return (
      <Router>
        <div className="cover" style={{ backgroundImage: `url(${image})` }}>
          <MenuBar />
          <Route path="/contact" exact component={Contact}/>
          <head>
            <title>Judy Zhang</title>
          </head>
          <body>
          </body>
        </div>
      </Router>
    );
  }
}*/
