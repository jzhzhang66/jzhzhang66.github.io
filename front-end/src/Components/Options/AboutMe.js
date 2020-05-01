import React from 'react';
import BurgerButton from '../SideNav/BurgerButton';
import Profile from '../../Images/Profile.jpg';
import '../../App.css';
import { motion } from "framer-motion";

class AboutMe extends React.Component {
    render() {
        return (
            <div className="about-me-container">
                <BurgerButton />
                <div>
                    <img className="profile-img" src={Profile} alt="" />
                </div>
                <div className="about-me-div">
                    <motion.h1 initial={{y: -200, opacity: 0}} animate={{y: 0, opacity: 1}} transition={{duration: 2, ease: "easeInOut"}} className="about-me-header">About Me</motion.h1>
                    <motion.a initial={{x: 200, opacity: 0}} animate={{x: 0, opacity: 1}} transition={{duration: 2, ease: "easeInOut"}}className="about-me-info">Hi there! My name is Judy and I'm a junior at Northeastern University pursuing a bachelors of computer science degree.
                    Photography has always been a passion of mine; just as I am inspired by other people's photographs, I love to
                    share mine with people like you, too! I decided to combine my two passions of front end web development and
                photography into this website. Enjoy! </motion.a>
                </div>
            </div>
        )
    }

}

export default AboutMe;