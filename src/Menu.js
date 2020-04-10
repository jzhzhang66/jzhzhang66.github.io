import { slide as Menu } from 'react-burger-menu';
import React, { Component} from 'react';
import './App.css';
import HamburgerMenu from 'react-hamburger-menu';

class MenuBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        };
    }

    showSettings (event) {
        event.preventDefault();
    }

    toggleMenu() {
        this.setState({isOpen: !this.state.isOpen})
    }

    render () {
        return (
            <div className={`burger-menu ${this.state.isOpen ? "menu-open" : "menu-close"}`}>
            <HamburgerMenu
            isOpen={this.state.isOpen}
            menuClicked={this.toggleMenu.bind(this)}
            width={18}
            height={15}
            strokeWidth={1}
            rotate={0}
            color='pink'
            borderRadius={0}
            animationDuration={0.5}
        />
        {
            this.state.isOpen && 
            <ul>
                <li href="/">Home</li>
                <li href="/aboutMe">About Me</li>
                <li href="/gallery">Gallery</li>
                <li href="/contact">Contact</li>
            </ul>
        }
        </div>
            /*
            <Menu isOpen={this.state.isOpen}>
                <a href="/">Home</a>
                <a href="/aboutMe">About Me</a>
                <a href="/gallery">Gallery</a>
                <a href="/contact">Contact</a>
            </Menu>
            */
        );
    }
}

export default MenuBar;