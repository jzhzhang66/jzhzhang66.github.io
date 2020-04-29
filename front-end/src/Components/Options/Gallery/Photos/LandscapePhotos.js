import React from 'react';
import '../../../../App.css';
import BurgerButton from '../../SideNav/BurgerButton';
import { getPhotoLinks } from '../../../utils';

class LandscapePhotos extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            links: []
        }
    }

    componentDidMount() {
        getPhotoLinks('landscape').then((res) => {
            this.setState({
                links: res
            });
        });
    }

    render() {
        <div>
            <BurgerButton />
            <div>
                {this.state.links.map((link, index) => {
                    return <img key={index} src={link} />;
                })}
            </div>
        </div>
    }
}