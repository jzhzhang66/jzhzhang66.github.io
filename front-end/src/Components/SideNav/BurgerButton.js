import React from 'react';
import '../../App.css';
import SideNav from './SideNav';
import Backdrop from '../Backdrop/Backdrop';
import { motion } from "framer-motion";

class BurgerButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            onHover: false,
            openNav: false
        }
        this.burgerButtonHover = this.burgerButtonHover.bind(this)
        this.burgerButtonNoHover = this.burgerButtonNoHover.bind(this)
        this.burgerButtonClicked = this.burgerButtonClicked.bind(this)
        this.handleBackDropClick = this.handleBackdropClick.bind(this)
    }

    burgerButtonHover() {
        this.setState(() => {
            return {
                onHover: true
            }
        })
    }

    burgerButtonNoHover() {
        this.setState(() => {
            return {
                onHover: false
            }
        })
    }

    burgerButtonClicked() {
        this.setState(() => {
            return {
                openNav: true
            }
        })
    }

    handleBackdropClick() {
        this.setState(() => {
            return {
                openNav: false
            }
        })
    }

    render() {
        return (
            <div >
                <motion.button whileHover={{ scale: 1.3 }} className={this.state.openNav ? "burger-button-hidden" : "burger-button"}
                    onClick={this.burgerButtonClicked}
                    onMouseOver={this.burgerButtonHover}
                    onMouseOut={this.burgerButtonNoHover}>

                    <div className={this.state.onHover ? "burger-button-line-hover" : "burger-button-line"} />
                    <div className={this.state.onHover ? "burger-button-line-hover" : "burger-button-line"} />
                    <div className={this.state.onHover ? "burger-button-line-hover" : "burger-button-line"} />

                </motion.button>
                <SideNav openNav={this.state.openNav} />
                <Backdrop openBackdrop={this.state.openNav} handleBackdropClick={this.handleBackdropClick.bind(this)}/>
            </div>
        )
    }
}

export default BurgerButton;