import React from 'react';
import '../../App.css';
import BurgerButton from '../SideNav/BurgerButton';
import { motion } from "framer-motion";

class Contact extends React.Component {

    render() {
        return (
            <div>
                <BurgerButton />
                <div className="contact-div">
                    <motion.h1 initial={{ x: -800, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 2, ease: "easeOut" }} className="contact-header">Contact</motion.h1>
                    <motion.div initial={{ x: 800, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 2, ease: "easeOut" }}>
                        <a>zhang.jud@husky.neu.edu</a>
                        <br></br>
                        <a>(201)-665-0678</a>
                    </motion.div>
                </div>
            </div>
        )
    }
}

export default Contact;