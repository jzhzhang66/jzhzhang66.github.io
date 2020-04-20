import React from 'react';
import '../../App.css';
import { Link } from 'react-router-dom';

class SideNav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            openDropdown: false
        }
        this.toggleDropdown = this.toggleDropdown.bind(this);
    }

    toggleDropdown() {
        this.setState(() => {
            return {
                openDropdown: !this.state.openDropdown
            }
        })
    }

    dropDown() {
        return (
            <ul>
                <Link to="/Gallery/Urban">
                    <li className="drop-down">Urban</li>
                </Link>
                <Link to="/Gallery/Landscape">
                    <li className="drop-down">Landscape</li>
                </Link>
                <Link to="/Gallery/Portraits">
                    <li className="drop-down">Portraits</li>
                </Link>
            </ul>
        )
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
                <Link onClick={this.toggleDropdown}>
                    <li>Gallery</li>
                    {this.state.openDropdown ? this.dropDown() : ""}
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