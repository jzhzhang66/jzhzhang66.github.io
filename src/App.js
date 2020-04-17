import React, { Component } from 'react';
import './App.css';
import Home from './Components/Options/Home';
import BurgerButton from './Components/SideDrawer/BurgerButton';


class App extends Component {
  render() {
    return (
        <div style={{height: '100%'}}>
          <head>
            <title>Judy Zhang</title>
          </head>
          <Home />
          <BurgerButton />
        </div>
    );
  }
}

export default App;
