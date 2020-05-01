import React from 'react';
import BurgerButton from '../../SideNav/BurgerButton';
import PortraitCover from '../../../Images/PortraitCover.jpg';
import TriangleButton from '../../TriangleButton/TriangleButton';
import {getPhotoLinks} from '../../../utils';
import { motion } from "framer-motion";

class Portrait extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            links:[]
        }
    }

    componentDidMount() {
        getPhotoLinks('portrait').then((res) => {
            this.setState({
                links: res
            });
        });
    }

    render() {
        return (
            <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 1.5, ease: "easeInOut"}}>
                <BurgerButton />
                <div className="portrait-container">
                    <img src={PortraitCover} alt="" />
                    <h1>Portrait</h1>
                </div>
                <TriangleButton album="Portrait" />
            </motion.div>
        )
    }
}

export default Portrait