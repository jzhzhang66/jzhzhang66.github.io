import React from 'react';
import '../../App.css';
import BurgerButton from '../SideNav/BurgerButton';

class Contact extends React.Component {
    render() {
        return (
            <div>
                <BurgerButton />
                <div className="contact-div">
                    <h1 className="contact-header">Contact</h1>
                    <a>zhang.jud@husky.neu.edu</a>
                    <br></br>
                    <a>(201)-665-0678</a>
                </div>
            </div>
        )
    }

}

export default Contact;