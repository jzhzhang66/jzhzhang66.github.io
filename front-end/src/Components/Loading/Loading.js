import React from 'react';
import '../../App.css';
import { motion } from "framer-motion";

class Loading extends React.Component {

    render() {
        return(
                <motion.a className="loading" animate={{y: [0, 10, 20, 10, 0]}} transition={{loop: Infinity, duration: 2}}> Loading...</motion.a>
        )
    };
}

export default Loading;