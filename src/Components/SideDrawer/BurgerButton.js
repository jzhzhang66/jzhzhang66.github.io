import React from 'react';
import '../../App.css';
import SideDrawer from './SideDrawer';
import Backdrop from '../Backdrop/Backdrop';

class BurgerButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            className: "burger-button-line",
            openDrawer: false
        }
        this.burgerButtonHover = this.burgerButtonHover.bind(this)
        this.burgerButtonNoHover = this.burgerButtonNoHover.bind(this)
        this.burgerButtonClicked = this.burgerButtonClicked.bind(this)
        this.handleBackDropClick = this.handleBackdropClick.bind(this)
    }

    burgerButtonHover() {
        this.setState(() => {
            return {
                className: "burger-button-line-hover"
            }
        })
    }

    burgerButtonNoHover() {
        this.setState(() => {
            return {
                className: "burger-button-line"
            }
        })
    }

    burgerButtonClicked() {
        this.setState(() => {
            return {
                openDrawer: true
            }
        })
    }

    handleBackdropClick() {
        this.setState(() => {
            return {
                openDrawer: false
            }
        })
    }

    render() {
        return (
            <div>
                <button className={this.state.openDrawer ? "" : "burger-button"}
                    onClick={this.burgerButtonClicked}
                    onMouseOver={this.burgerButtonHover}
                    onMouseOut={this.burgerButtonNoHover}>

                    <div className={this.state.className} />
                    <div className={this.state.className} />
                    <div className={this.state.className} />

                </button>
                <SideDrawer openDrawer={this.state.openDrawer} />
                <Backdrop openBackdrop={this.state.openDrawer} handleBackdropClick={this.handleBackdropClick.bind(this)}/>
            </div>
        )
    }
}

export default BurgerButton;