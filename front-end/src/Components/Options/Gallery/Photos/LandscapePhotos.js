import React from 'react';
import '../../../../App.css';
import BurgerButton from '../../../SideNav/BurgerButton';
import { getPhotoLinks } from '../../../../utils';
import JustifiedGrid from 'react-justified-grid'

class LandscapePhotos extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            images: []
        }
    }

    componentDidMount() {
        getPhotoLinks('landscape').then((res) => {
            this.setState(() => {
                return {
                    images: res
                }
            })
        })
    }

    render() {
        return (
            <div>
                <BurgerButton />
                <JustifiedGrid
                    images={this.state.images}
                    rows={10000}
                    maxRowHeight={900}
                    gutter={1} />
            </div>
        )
    };
}

export default LandscapePhotos;