import React from 'react';
import BurgerButton from '../../SideNav/BurgerButton';
import UrbanCover from '../../../Images/UrbanCover.jpg';
import TriangleButton from '../../TriangleButton/TriangleButton';
import {getPhotoLinks} from '../../../utils';
import { motion } from "framer-motion";

class Urban extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            links:[]
        }
    }

    componentDidMount() {
        getPhotoLinks('urban').then((res) => {
            this.setState({
                links: res
            });
        });
    }

    render() {
        return (
            <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 1.5, ease: "easeInOut"}}>
                <BurgerButton />
                <div className="urban-container">
                    <img src={UrbanCover} alt="" />
                    <h1>URBAN</h1>
                </div>
                <TriangleButton album="Urban" />
            </motion.div>
        )
    }
}

export default Urban 