import React from 'react';
import BurgerButton from '../../SideNav/BurgerButton';
import PortraitCover from '../../../Images/PortraitCover.jpg';
import TriangleButton from '../../TriangleButton/TriangleButton';

class Portrait extends React.Component {

    render() {

        return (
            <div>
                <BurgerButton />
                <div className="portrait-container">
                    <img src={PortraitCover} alt="" />
                    <h1>Portrait</h1>
                </div>
                <TriangleButton />
            </div>
        )
    }
}

export default Portrait