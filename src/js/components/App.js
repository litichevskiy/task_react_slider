import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as pageActions from '../actions/index';
import storage from '../data/index';
import Slider from './Slider';

const DEFAULT_QUANTITY = 5; // items preview ( minimum 2 )
const LEAF_THROUGH_TIME = 10000; // ms

class App extends Component {

    constructor( props ) {
        super( props );

        this.getNextPreview = this.getNextPreview.bind( this );
        this.getPreviousPreview = this.getPreviousPreview.bind( this );
    }

    componentWillMount() {
        this.addImages();
    }

    addImages( from = 0, to = DEFAULT_QUANTITY -1 ) {
        storage.getList( from, to )
        .then( response => {
            this.props.dispatch( pageActions.addImages( response ) );
        })
        .catch( error => console.error( error ) );
    }

    deleteImages( from, to ) {
        this.props.dispatch( pageActions.removeImages({ from, to }) );
    }

    getNextPreview( from, to ) {
        this.addImages( from, to );
    }

    getPreviousPreview( from, to ) {
        this.deleteImages( from, to );
    }

    render() {
        return(
            <React.Fragment>
                <Slider
                    leafThrough
                    leafThroughTime={LEAF_THROUGH_TIME}
                    quantity={DEFAULT_QUANTITY}
                    sliderList={this.props.slider}
                    getNextPreview={this.getNextPreview}
                    getPreviousPreview={this.getPreviousPreview}
                    isNext={this.props.isNext}
                    isPrevious={this.props.isPrevious} />
            </React.Fragment>
        )
    }
};

const mapStateToProps = state => {

    const props = {
        slider: state.slider.slice( -DEFAULT_QUANTITY ),
        isNext: state.isNext,
        isPrevious: state.isPrevious,
    }
    return props;
};

App = connect( mapStateToProps )( App );

export default App;