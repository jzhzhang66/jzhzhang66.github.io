import React from 'react';
import '../../../../App.css';
import BurgerButton from '../../../SideNav/BurgerButton';
import { getPhotoLinks } from '../../../../utils';
import JustifiedGrid from 'react-justified-grid';
import Loading from '../../../Loading/Loading';
import { motion } from 'framer-motion';

class PortraitPhotos extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            images: [],
            loading: true
        }
    }

    componentDidMount() {
        getPhotoLinks('portrait').then((res) => {
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
            <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 1}}>
                <BurgerButton />
                <JustifiedGrid
                    images={this.state.images}
                    rows={10000}
                    maxRowHeight={900}
                    gutter={1} />
            </motion.div>
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


export default PortraitPhotos;