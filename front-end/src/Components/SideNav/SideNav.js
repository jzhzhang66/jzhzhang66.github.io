import React from 'react';
import '../../App.css';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";

const sideNavVariants = {
    open: { 
        opacity: .7,
        x: 0,
        transition: {
            duration: 1
        }
    },
    closed: { 
        opacity: 0,
        x: "-40%"
    }
}
  

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
                    <motion.li whileHover={{scale: 1.2, x: 15}} whileTap={{ scale: 0.95 }} className="drop-down">Urban</motion.li>
                </Link>
                <Link to="/Gallery/Landscape">
                    <motion.li whileHover={{scale: 1.2, x: 15}} whileTap={{ scale: 0.95 }} className="drop-down">Landscape</motion.li>
                </Link>
                <Link to="/Gallery/Portrait">
                    <motion.li whileHover={{scale: 1.2, x: 15}} whileTap={{ scale: 0.95 }} className="drop-down">Portrait</motion.li>
                </Link>
            </ul>
        )
    }

    toRender() {
        return (
            <ul>
                <Link to="/">
                    <motion.li whileHover={{scale: 1.1, x: 15}} whileTap={{ scale: 0.95 }}>Home</motion.li>
                </Link>
                <Link to="/AboutMe">
                    <motion.li whileHover={{scale: 1.1, x: 15}} whileTap={{ scale: 0.95 }}>About Me</motion.li>
                </Link>
                <Link onClick={this.toggleDropdown}>
                    <motion.li whileHover={{scale: 1.1, x: 15}} whileTap={{ scale: 0.95 }}>Gallery</motion.li>
                    {this.state.openDropdown ? this.dropDown() : ""}
                </Link>
                <Link to="/Contact">
                    <motion.li whileHover={{scale: 1.1, x: 15}} whileTap={{ scale: 0.95 }}>Contact</motion.li>
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