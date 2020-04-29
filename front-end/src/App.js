import React, { Component } from 'react';
import './App.css';
import Home from './Components/Options/Home';
import AboutMe from './Components/Options/AboutMe';
import Contact from './Components/Options/Contact';
import Landscape from './Components/Options/Gallery/Landscape';
import Portrait from './Components/Options/Gallery/Portrait';
import Urban from './Components/Options/Gallery/Urban';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import axios from 'axios'

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
            <Route path="/Gallery/Landscape" component={Landscape} />
            <Route path="/Gallery/Portrait" component={Portrait} />
            <Route path="/Gallery/Urban" component={Urban} />
          </Switch>
        </div>
    );
  }
}

export default App;
//<a href='https://photos.google.com/share/AF1QipP6osiTbEsFWcStmR3uIph_l_kK1MIKEnfeSymYiPlTh4Eqg_dySZe4GFOWezbaPg?key=cEQ5dTJLWXpOZnZPUDJBSXpFZFdGZ3Fpb2hEZkVn&source=ctrlq.org'><img src='https://lh3.googleusercontent.com/mti0ljq2KJlgOnOYaqw1JLaStNmxT5H4cqOz0qOEg3CvK1CB3ZZPuFL3xks9mM2Q_9v32Wnr3hNkxKRnHK8OAXmTcpJm1paHk22YGDqZlPkkll_OdsEhGJUIrog6G-Y66KVw7PSGjvM=w2400' /></a>