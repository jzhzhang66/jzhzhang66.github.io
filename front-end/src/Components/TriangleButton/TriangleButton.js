import React from 'react';
import '../../App.css';
import {Link} from 'react-router-dom';

class TriangleButton extends React.Component {

    render() {
        var albumLink;
        if (this.props.album === "Landscape") {
            albumLink = "/Gallery/Landscape/Photos"
        }
        else if (this.props.album === "Portrait") {
            albumLink = "/Gallery/Portrait/Photos"
        }
        else if (this.props.album === "Urban") {
            albumLink = "/Gallery/Urban/Photos"
        }
        return (
            <Link to={albumLink} className="triangle-button" />
        )
    }
}

export default TriangleButton;