import React from 'react';
import BurgerButton from '../../SideNav/BurgerButton';
import LandscapeCover from '../../../Images/LandscapeCover.jpg';

class Landscape extends React.Component {

    render() {
        const style = {
            height: '100%',
            width: '100%',
            position: 'fixed'
        }
        
        return (
            <div>
                <BurgerButton />
                <div className="landscape-container">
                    <img src={LandscapeCover} alt="" style={style}/>
                    <h1>LANDSCAPE</h1>
                </div>
            </div>
        )
    }
}

export default Landscape