import React from 'react';
import BurgerButton from '../../SideNav/BurgerButton';
import LandscapeCover from '../../../Images/LandscapeCover.jpg';
import {getPhotoLinks} from '../../../utils';
import TriangleButton from '../../TriangleButton/TriangleButton';
import { AnimatePresence, motion } from 'framer-motion';

class Landscape extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            links:[],
        }
    }

    componentDidMount() {
        getPhotoLinks('landscape').then((res) => {
            this.setState({
                links: res
            });
        });
    }

    render() {
        return (
            <AnimatePresence>
            <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 1.5, ease: "easeInOut"}} exit={{y: -200}}>
                <BurgerButton />
                <div className="landscape-container">
                    <img src={LandscapeCover} alt="" />
                    <h1>LANDSCAPE</h1>
                </div>
                <TriangleButton album="Landscape"/>
            </motion.div>
            </AnimatePresence>
        )
    }
}

export default Landscape