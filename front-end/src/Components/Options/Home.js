import React, { Component } from 'react';
import '../../App.css';
import HomeCover from '../../Images/HomeCover.jpg';
import Logo from '../../Images/Logo.png';
import BurgerButton from '../SideNav/BurgerButton';

class Home extends Component {
  render() {
    return (
      <div className="image-box">
                  <BurgerButton />
        <div className="image-box-background" style={{ backgroundImage: `url(${HomeCover})` }}></div>
        <div className="image-box-logo">
          <img src={Logo} alt=""/>
        </div>
      </div>
    );
  }
}

export default Home;
