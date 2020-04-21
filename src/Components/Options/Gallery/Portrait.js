import React from 'react';
import BurgerButton from '../../SideNav/BurgerButton';
import PortraitCover from '../../../Images/PortraitCover.jpg';

class Portrait extends React.Component {

    render() {
        const style = {
            height: '100%',
            width: '100%'
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