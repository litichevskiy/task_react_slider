import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Preloader from './Preloader';

const HIDE_PRELOADER = 100; // ms

class CreateImage extends Component {
    constructor( props ) {
        super( props );

        this.state = {
            isReady: false,
        }

        this.imgReady = this.imgReady.bind( this );
    }

    componentWillReceiveProps( prop ){
        if ( prop.isNewProps ) this.state.isReady = false;
    }

    imgReady() {
        setTimeout(() => this.setState({isReady: true}), HIDE_PRELOADER );
    }

    render() {
        const props = this.props;
        return(
            <React.Fragment>
                <img
                    onLoad={this.imgReady}
                    src={props.src}
                    className={props.className}
                    alt={props.alt} />
                    <Preloader isLoad={( !this.state.isReady ) ? true : false} />
            </React.Fragment>
        )
    }
};

CreateImage.propTypes = {
    src: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired,
    isNewProps: PropTypes.bool.isRequired,
};

CreateImage.defaultProps = {
    alt: "",
};

export default CreateImage;