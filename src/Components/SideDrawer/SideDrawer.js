import React from 'react';
import '../../App.css';
import { Link } from 'react-router-dom';
class SideDrawer extends React.Component {

    toRender() {
        return (
            <ul>
                <Link to="/">
                    <li><a href="/">Home</a></li>
                </Link>
                <Link to="/AboutMe">
                    <li><a href="/AboutMe">About Me</a></li>
                </Link>
                <Link to="/Gallery">
                    <li><a href="/Gallery">Gallery</a></li>
                </Link>
                <Link to="/Contact">
                    <li><a href="/Contact">Contact</a></li>
                </Link>
            </ul>
        )
    }

    render() {
        return (
            <nav className={this.props.openDrawer ? "side-drawer" : ""}>
                {this.props.openDrawer ? this.toRender() : ""}
            </nav>
        )
    }
}

export default SideDrawer;
