import React from 'react';
import '../../App.css';

class SideDrawer extends React.Component {

    toRender() {
         return (
         <ul>
             <li><a href="/">Home</a></li>
             <li><a href="/">About Me</a></li>
             <li><a href="/">Gallery</a></li>
             <li><a href="/">Contact</a></li>
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
