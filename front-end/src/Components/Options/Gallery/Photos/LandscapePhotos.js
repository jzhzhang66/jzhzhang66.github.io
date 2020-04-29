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
            const photos = res.map((link) => {
                return {
                    src: link,
                    width: 700,
                    height: 500
                }
            })
            this.setState(() => {
                return {
                    images: photos
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
                    rows={500}
                    maxRowHeight={900}
                    gutter={1} />
            </div>
        )
    };
}

export default LandscapePhotos;