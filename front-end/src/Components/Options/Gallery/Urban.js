import React from 'react';
import BurgerButton from '../../SideNav/BurgerButton';
import UrbanCover from '../../../Images/UrbanCover.jpg';
import TriangleButton from '../../TriangleButton/TriangleButton';

class Urban extends React.Component {

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