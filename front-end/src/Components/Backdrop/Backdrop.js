import React from 'react';
import '../../App.css';
import { motion } from "framer-motion";

const backdropVariants = {
    open: {
        opacity: .5,
        transition: {
            duration: 1
        }
    },
    closed: {
        opacity: 0,
    }
}

class Backdrop extends React.Component {

    render() {
        return (
            <motion.div variants={backdropVariants} className={this.props.openBackdrop ? "backdrop" : ""} onClick={this.props.handleBackdropClick}/>
        )
    }
}

export default Backdrop