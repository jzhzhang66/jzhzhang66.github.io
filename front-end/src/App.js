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
import LandscapePhotos from './Components/Options/Gallery/Photos/LandscapePhotos';
import PortraitPhotos from './Components/Options/Gallery/Photos/PortraitPhotos';
import UrbanPhotos from './Components/Options/Gallery/Photos/UrbanPhotos';

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
            <Route exact path="/Gallery/Landscape" component={Landscape} />
            <Route exact path="/Gallery/Portrait" component={Portrait} />
            <Route exact path="/Gallery/Urban" component={Urban} />
            <Route path="/Gallery/Landscape/Photos" component={LandscapePhotos} />
            <Route path="/Gallery/Portrait/Photos" component={PortraitPhotos} />
            <Route path="/Gallery/Urban/Photos" component={UrbanPhotos} />
          </Switch>
        </div>
    );
  }
}

export default App;