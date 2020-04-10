import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home';

class App extends Component {
  render() {
    return (
        <div>
          <Home />
          <head>
            <title>Judy Zhang</title>
          </head>
          <body>
          </body>
        </div>
    );
  }
}

export default App;
