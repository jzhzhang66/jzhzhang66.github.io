import React from 'react';
import BurgerButton from '../../SideNav/BurgerButton';
import UrbanCover from '../../../Images/UrbanCover.jpg';

class Urban extends React.Component {

    render() {
        const style = {
            height: '100%',
            width: '100%'
        }
        
        return (
            <div>
                <BurgerButton />
                <div className="urban-container">
                    <img src={UrbanCover} alt="" style={style}/>
                    <h1>URBAN</h1>
                </div>
            </div>
        )
    }
}

export default Urban 