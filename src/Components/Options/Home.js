import React, { Component } from 'react';
import '../../App.css';
import homeCover from '../../Images/homeCover.jpg';
import logo from '../../Images/logo.png';

class Home extends Component {
  render() {
    return (
      <div className="image-box">
        <div className="image-box-background" style={{ backgroundImage: `url(${homeCover})` }}></div>
        <div className="image-box-logo">
          <img src={logo} alt=""/>
        </div>
      </div>
    );
  }
}

export default Home;
