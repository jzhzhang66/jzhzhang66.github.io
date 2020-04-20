import React from 'react';
import '../../App.css';
import { Link } from 'react-router-dom';

class SideNav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            overallHovering: false,
            headerHovering: false,
            urbanHovering: false,
            landscapeHovering: false,
            portraitHovering: false
        }
        this.setHeaderHovering = this.setHeaderHovering.bind(this);
        this.setHeaderNotHovering = this.setHeaderNotHovering.bind(this);
        this.setOptionHovering = this.setOptionHovering.bind(this);
        this.setOptionNotHovering = this.setOptionNotHovering.bind(this);
        this.setOverallHovering = this.setOverallHovering.bind(this);
    }

    setHeaderHovering() {
        this.setState(() => {
            return {
                headerHovering: true
            }
        })
    }

    setHeaderNotHovering() {
        this.setState(() => {
            return {
                headerHovering: false
            }
        })
    }

   setOptionHovering = option => {
        if (option === "Urban") {
            this.setState(() => {
                return {
                    urbanHovering: true
                }
            })
        }
        if (option === "Landscape") {
            this.setState(() => {
                return {
                    landscapeHovering: true
                }
            })
        }
        if (option === "Portrait") {
            this.setState(() => {
                return {
                    portraitHovering: true
                }
            })
        }
    }

    setOptionNotHovering = option => {
        if (option === "Urban") {
            this.setState(() => {
                return {
                    urbanHovering: false
                }
            })
        }
        if (option === "Landscape") {
            this.setState(() => {
                return {
                    landscapeHovering: false
                }
            })
        }
        if (option === "Portrait") {
            this.setState(() => {
                return {
                    portraitHovering: false
                }
            })
        }
    }

    setOverallHovering() {
        this.setState(() => {
            return {
                overallHovering: this.state.headerHovering || this.state.urbanHovering || this.state.landscapeHovering || this.state.portraitHovering ? true : false
            }
        })
    }

    dropDown() {
        return (
            <ul>
                <Link onMouseOver={this.setOptionHovering("Urban"), this.setOverallHovering}
                    onMouseOut={this.setOptionNotHovering("Urban"), this.setOverallHovering}
                    to="/Gallery/Urban">
                    <li className="drop-down">Urban</li>
                </Link>
                <Link onMouseOver={this.setOptionHovering("Landscape"), this.setOverallHovering}
                    onMouseOut={this.setOptionNotHovering("Landscape"), this.setOverallHovering}
                    to="/Gallery/Landscape">
                    <li className="drop-down">Landscape</li>
                </Link>
                <Link onMouseOver={this.setOptionHovering("Portrait"), this.setOverallHovering}
                    onMouseOut={this.setOptionNotHovering("Portrait"), this.setOverallHovering}
                    to="/Gallery/Portraits">
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
                <Link onMouseOver={this.setHeaderHovering, this.setOverallHovering}
                    onMouseOut={this.setHeaderNotHovering, this.setOverallHovering}>
                    <li>Gallery</li>
                    {this.state.overallHovering ? this.dropDown() : ""}
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
