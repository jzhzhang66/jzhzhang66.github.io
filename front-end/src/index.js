import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Contact from './Components/Options/Contact';
import AboutMe from './Components/Options/AboutMe';
import * as serviceWorker from './serviceWorker';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import LandscapePhotos from './Components/Options/Gallery/Photos/LandscapePhotos';

ReactDOM.render(
  <React.StrictMode>
    <Router>
    <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();