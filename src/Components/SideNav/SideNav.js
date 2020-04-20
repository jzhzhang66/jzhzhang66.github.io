import React from 'react';
import '../../App.css';
import { Link } from 'react-router-dom';

class SideNav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hovering: false
        }
        this.setHovering = this.setHovering.bind(this);
        this.setNotHovering = this.setNotHovering.bind(this);
    }

    dropDown() {
        return (
            <ul>
                <li>City</li>
                <li>Nature</li>
                <li>Portraits</li>
            </ul>
        )
    }

    setHovering() {
        this.setState(() => {
            return {            
                hovering: true
            }
        })

    }

    setNotHovering() {
        this.setState(() => {
            return {            
                hovering: false
            }
        })
    }

    toRender() {
        return (
            <ul>
                <Link to="/">
                    <li>Home</li>
                </Link>
                <Link to="/AboutMe">
                    <li>About Me</li>
                </Link>
                <Link onMouseOver={this.setHovering} 
                    onMouseOut={this.setNotHovering}>
                    <li>Gallery</li>
                    {this.state.hovering ? this.dropDown() : ""}
                </Link>
                <Link to="/Contact">
                    <li>Contact</li>
                </Link>
            </ul>
        )
    }

    render() {
        return (
            <nav className={this.props.openNav ? "side-nav" : ""}>
                {this.props.openNav ? this.toRender() : ""}
            </nav>
        )
    }
}

export default SideNav;
