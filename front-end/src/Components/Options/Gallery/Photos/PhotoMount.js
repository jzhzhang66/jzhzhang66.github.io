import React from 'react';
import '../../../../App.css';

class PhotoMount extends React.Component {

    render() {
        return (
            <div>
                <img key={this.props.key} src={this.props.src}/>
            </div>
        )
    }
}

export default PhotoMount;