import React from 'react';
import '../../App.css';
import { Link } from 'react-router-dom';
class SideDrawer extends React.Component {

    toRender() {
        return (
            <ul>
                <Link to="/">
                    <li>Home</li>
                </Link>
                <Link to="/AboutMe">
                    <li>About Me</li>
                </Link>
                <Link to="/Gallery">
                    <li>Gallery</li>
                </Link>
                <Link to="/Contact">
                    <li>Contact</li>
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
