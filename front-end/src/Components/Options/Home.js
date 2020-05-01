import React, { Component } from 'react';
import '../../App.css';
import HomeCover from '../../Images/HomeCover.jpg';
import Logo from '../../Images/Logo.png';
import BurgerButton from '../SideNav/BurgerButton';
import { motion } from "framer-motion";


class Home extends Component {

  render() {
    return (
      <div className="image-box">
        <BurgerButton />
        <motion.div initial={{opacity: 0}} animate={{opacity: .7}} transition={{duration: 1.5, ease: "easeInOut"}} className="image-box-background" style={{ backgroundImage: `url(${HomeCover})`, opacity: '70%' }}></motion.div>
        <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 1.5, ease: "easeInOut"}} className="image-box-logo">
          <img src={Logo} alt="" />
        </motion.div>
      </div>
    );
  }
}

export default Home;
