import React from 'react';
import BurgerButton from '../../SideNav/BurgerButton';
import '../../../App.css';

class Urban extends React.Component {
    render() {
        return (
            <div>
                <BurgerButton />
                <div className="urban-container">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/WoZQ0ivvW7E?autoplay=1"
                 frameborder="0" allow="accelerometer; autoplay; loop; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen></iframe>
                    <h1>URBAN</h1>
                </div>
            </div>
        )
    }
}

export default Urban 