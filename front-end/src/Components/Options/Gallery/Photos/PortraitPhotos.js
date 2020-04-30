import React from 'react';
import '../../../../App.css';
import BurgerButton from '../../../SideNav/BurgerButton';
import { getPhotoLinks } from '../../../../utils';
import JustifiedGrid from 'react-justified-grid'

class PortraitPhotos extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            images: []
        }
    }

    componentDidMount() {
        getPhotoLinks('portrait').then((res) => {
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
                    rows={500}
                    maxRowHeight={900}
                    gutter={1} />
            </div>
        )
    };
}

export default PortraitPhotos;