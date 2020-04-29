import React from 'react';
import BurgerButton from '../SideNav/BurgerButton';
import Profile from '../../Images/Profile.jpg';
import '../../App.css';

class AboutMe extends React.Component {
    render() {
        return (
            <div className="about-me-container">
                <BurgerButton />
                <div>
                    <img className="profile-img" src={Profile} alt="" />
                </div>
                <div className="about-me-div">
                    <h1 className="about-me-header">About Me</h1>
                    <a className="about-me-info">Hi there! My name is Judy and I'm a junior at Northeastern University pursuing a bachelors of computer science degree.
                    Photography has always been a passion of mine; just as I am always inspired by other people's photography, I love to
                    share my photos with people like you, too! I decided to combine my two passions of front end web development and
                photography into this website. Enjoy! </a>
                </div>
            </div>
        )
    }

}

export default AboutMe;