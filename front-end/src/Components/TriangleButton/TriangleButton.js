import React from 'react';
import '../../App.css';
import {Link} from 'react-router-dom';
import { motion } from "framer-motion";

class TriangleButton extends React.Component {

    render() {
        var albumLink;
        if (this.props.album === "Landscape") {
            albumLink = "/Gallery/Landscape/Photos"
        }
        else if (this.props.album === "Portrait") {
            albumLink = "/Gallery/Portrait/Photos"
        }
        else if (this.props.album === "Urban") {
            albumLink = "/Gallery/Urban/Photos"
        }
        return (
            <motion.div  animate={{y: [0, 5, 10, 5, 0]}} transition={{loop: Infinity, duration: 1}} >
            <Link to={albumLink} className="triangle-button"/>
            </motion.div>
        )
    }
}

export default TriangleButton;