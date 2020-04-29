import React from 'react';
import '../../App.css';

class TriangleButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            album: ''
        }
    }
    
    render() {
        return (
            <button className="triangle-button" />
        )
    }
}

export default TriangleButton;