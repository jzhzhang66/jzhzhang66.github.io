import React from 'react';
import BurgerButton from '../../SideNav/BurgerButton';
import LandscapeCover from '../../../Images/LandscapeCover.jpg';
import {getPhotoLinks} from '../../../utils';

class Landscape extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            links:[]
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
        const style = {
            height: '100%',
            width: '100%',
            position: 'fixed'
        }
        
        return (
            <div>
                <BurgerButton />
                {/* <div className="landscape-container">
                    <img src={LandscapeCover} alt="" style={style}/>
                    <h1>LANDSCAPE</h1>
                </div> */}
                <div>
                    {this.state.links.map((link, index) => {
                        return <img key={index} src={link} />;
                    })}
                </div>
            </div>
        )
    }
}

export default Landscape