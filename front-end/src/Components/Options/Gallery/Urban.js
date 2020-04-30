import React from 'react';
import BurgerButton from '../../SideNav/BurgerButton';
import UrbanCover from '../../../Images/UrbanCover.jpg';
import TriangleButton from '../../TriangleButton/TriangleButton';
import {getPhotoLinks} from '../../../utils';

class Urban extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            links:[]
        }
    }

    componentDidMount() {
        getPhotoLinks('urban').then((res) => {
            this.setState({
                links: res
            });
        });
    }

    render() {
        return (
            <div>
                <BurgerButton />
                <div className="urban-container">
                    <img src={UrbanCover} alt="" />
                    <h1>URBAN</h1>
                </div>
                <TriangleButton album="Urban" />
            </div>
        )
    }
}

export default Urban 