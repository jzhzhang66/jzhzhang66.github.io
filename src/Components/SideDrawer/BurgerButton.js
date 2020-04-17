import React from 'react';
import '../../App.css';

class BurgerButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            className: "burger-button"
        }
        this.burgerButtonHover = this.burgerButtonHover.bind(this)
        this.burgerButtonNoHover = this.burgerButtonNoHover.bind(this)
        this.burgerButtonClicked = this.burgerButtonClicked.bind(this)
    }

    burgerButtonHover()  {
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
                className: ""
            }
        })
    }

    render() {
        return (
            <button onClick={this.burgerButtonClicked} onMouseOver={this.burgerButtonHover} onMouseOut={this.burgerButtonNoHover} className="burger-button"> 
                <div className={this.state.className}/>
                <div className={this.state.className}/>
                <div className={this.state.className}/>
            </button>
        )
    }
}

export default BurgerButton;