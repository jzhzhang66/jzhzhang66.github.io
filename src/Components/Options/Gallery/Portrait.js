import React from 'react';
import BurgerButton from '../../SideNav/BurgerButton';
import PortraitCover from '../../../Images/PortraitCover.jpg';

class Portrait extends React.Component {

    render() {
        const style = {
            maxHeight: '110%',
            width: '100%',
            position: 'fixed',
            filter: 'brightness(50%)'
        }
        
        return (
            <div>
                <BurgerButton />
                <div className="portrait-container">
                    <img src={PortraitCover} alt="" style={style} />
                    <h1>Portrait</h1>
                </div>
            </div>
        )
    }
}

export default Portrait