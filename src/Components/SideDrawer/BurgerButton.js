import React from 'react';
import '../../App.css';

class BurgerButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            className: "burger-button"
        }
    }

    burgerButtonHover()  {
        this.setState()

    }

    render() {
        return (
            <button onMouseOver={this.burgerButtonHover} className="burger-button"> 
                <div className="burger-button-line"/>
                <div className="burger-button-line"/>
                <div className="burger-button-line"/>
            </button>
        )
    }
}

export default BurgerButton;