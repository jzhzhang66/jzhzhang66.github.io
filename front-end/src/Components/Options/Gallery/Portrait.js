import React from 'react';
import BurgerButton from '../../SideNav/BurgerButton';
import PortraitCover from '../../../Images/PortraitCover.jpg';
import TriangleButton from '../../TriangleButton/TriangleButton';
import {getPhotoLinks} from '../../../utils';

class Portrait extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            links:[]
        }
    }

    componentDidMount() {
        getPhotoLinks('portrait').then((res) => {
            this.setState({
                links: res
            });
        });
    }

    render() {
        return (
            <div>
                <BurgerButton />
                <div className="portrait-container">
                    <img src={PortraitCover} alt="" />
                    <h1>Portrait</h1>
                </div>
                <TriangleButton album="Portrait" />
            </div>
        )
    }
}

export default Portrait