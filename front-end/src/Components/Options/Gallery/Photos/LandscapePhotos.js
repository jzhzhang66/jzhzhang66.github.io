import React from 'react';
import '../../../../App.css';
import BurgerButton from '../../../SideNav/BurgerButton';
import { getPhotoLinks } from '../../../../utils';
import JustifiedGrid from 'react-justified-grid';
import Loading from '../../../Loading/Loading';

class LandscapePhotos extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            images: [],
            loading: true
        }
    }

    componentDidMount() {
        getPhotoLinks('landscape').then((res) => {
            this.setState(() => {
                return {
                    images: res,
                    loading: false
                }
            })
        })
    }

    toRender() {
        return (
            <div >
                <BurgerButton />
                <JustifiedGrid
                    images={this.state.images}
                    rows={10000}
                    maxRowHeight={900}
                    gutter={1} />
            </div>
        )
    };
    render() {
        return (
            <div>
                {this.state.loading ? <Loading /> : this.toRender()}
            </div>
        )
    }
}

export default LandscapePhotos;