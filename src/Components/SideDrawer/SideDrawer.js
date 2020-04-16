import React from 'react';
import '../../App.css';

class SideDrawer extends React.Component {
    render() {
        return (
            <nav className="side-drawer">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/">About Me</a></li>
                    <li><a href="/">Gallery</a></li>
                    <li><a href="/">Contact</a></li>
                </ul>
            </nav>
        )
    }
}

export default SideDrawer;
