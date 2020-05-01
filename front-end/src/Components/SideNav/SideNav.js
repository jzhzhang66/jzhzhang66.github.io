import React from 'react';
import '../../App.css';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";

const sideNavVariants = {
    open: { 
        opacity: .7
         
    },
    closed: { 
        opacity: 0 
    }
}

    //initial={{x: -700}} animate={{x: 0}} transition={{duration: 2}}

class SideNav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            openDropdown: false
        }
        this.toggleDropdown = this.toggleDropdown.bind(this);
    }

    toggleDropdown() {
        this.setState(() => {
            return {
                openDropdown: !this.state.openDropdown
            }
        })
    }

    dropDown() {
        return (
            <ul>
                <Link to="/Gallery/Urban">
                    <li className="drop-down">Urban</li>
                </Link>
                <Link to="/Gallery/Landscape">
                    <li className="drop-down">Landscape</li>
                </Link>
                <Link to="/Gallery/Portrait">
                    <li className="drop-down">Portrait</li>
                </Link>
            </ul>
        )
    }

    toRender() {
        return (
            <ul>
                <Link to="/">
                    <li>Home</li>
                </Link>
                <Link to="/AboutMe">
                    <li>About Me</li>
                </Link>
                <Link onClick={this.toggleDropdown}>
                    <li>Gallery</li>
                    {this.state.openDropdown ? this.dropDown() : ""}
                </Link>
                <Link to="/Contact">
                    <li>Contact</li>
                </Link>
            </ul>
        )
    }

    render() {
        return (
            <motion.nav variants={sideNavVariants} className={this.props.openNav ? "side-nav" : ""} style={this.props.openNav ? {opacity:'60%'} : {opacity: '0%'}}>
                {this.props.openNav ? this.toRender() : ""}
            </motion.nav>
        )
    }
}

export default SideNav;