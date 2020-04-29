import React from 'react';
import '../../App.css';

class Backdrop extends React.Component {

    render() {
        return (
            <div className={this.props.openBackdrop ? "backdrop" : ""} onClick={this.props.handleBackdropClick}/>
        )
    }
}

export default Backdrop