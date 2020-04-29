import React from 'react';
import BurgerButton from '../../SideNav/BurgerButton';
import LandscapeCover from '../../../Images/LandscapeCover.jpg';
import {getPhotoLinks} from '../../../utils';
import TriangleButton from '../../TriangleButton/TriangleButton';

class Landscape extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            links:[]
        }
    }

    componentDidMount() {
        getPhotoLinks('landscape').then((res) => {
            this.setState({
                links: res
            });
        });
    }

    render() {
        
        return (
            <div>
                <BurgerButton />
                <div className="landscape-container">
                    <img src={LandscapeCover} alt="" />
                    <h1>LANDSCAPE</h1>
                </div>
                <TriangleButton />
            </div>
        )
    }
}

export default Landscape