import React from 'react';
import '../../App.css';
import {Link} from 'react-router-dom';

class TriangleButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            album: ''
        }
    }
    
    render() {
        return (
            <Link to="/Gallery/Landscape/Photos" className="triangle-button" />
        )
    }
}

export default TriangleButton;