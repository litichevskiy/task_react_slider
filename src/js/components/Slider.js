import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Arrow from './Arrow';
import CreateImage from './CreateImage';
import getParentNode from '../utils/getParentNode';
import Preloader from './Preloader';

class Slider extends Component {
    constructor( props ) {
        super( props );

        if( this.props.quantity < 2 ) throw(`quantity - can not be less than 2`);

        this.state = { activeIndex: 0 };
        this.newProps;
        this.intevral;
        this.memoryIndex;
        this.from = 0;
        this.to = this.props.quantity -1;
        this.nextImgs = this.nextImgs.bind( this );
        this.previousImgs = this.previousImgs.bind( this );
        this.nextBlockImgs = this.nextBlockImgs.bind( this );
        this.previousBlockImgs = this.previousBlockImgs.bind( this );
        this.setNewActiveIndex = this.setNewActiveIndex.bind( this );
        this.stopLeafThrough = this.stopLeafThrough.bind( this );
        this.startLeafThrough = this.startLeafThrough.bind( this );
    }

    componentDidMount() {
        if( this.props.leafThrough ) {
            this.refs.containerSlide.addEventListener('mouseover', this.stopLeafThrough );
            this.refs.containerSlide.addEventListener('mouseout', this.startLeafThrough );
            this.startLeafThrough();
        }
    }

    componentWillReceiveProps() {
        this.newProps = true;
        setTimeout(() => this.newProps = false, 200 );
    }

    startLeafThrough() {
        this.intevral = setInterval(() => {
            this.nextImgs();
        }, this.props.leafThroughTime );
    }

    stopLeafThrough() {
        clearInterval( this.intevral );
    }

    componentDidUpdate() {
        let listImages = this.refs.wrapperImages.children;
        if( this.memoryIndex === undefined ) {
            if( listImages.length < 1 ) return;
            listImages[this.state.activeIndex].classList.add('active');
        }
        else{
            listImages[this.state.activeIndex].classList.add('active');
            listImages[this.memoryIndex].classList.remove('active');
        }
    }

    setMemoryIndex( index ) {
        this.memoryIndex = index;
    }

    nextImgs() {
        let index = this.state.activeIndex;
        if( index >= this.props.quantity -1 ) {
            this.setMemoryIndex( this.props.quantity -1 );
            this.setState({activeIndex: 0});
        }
        else{
            this.setMemoryIndex( index );
            this.setState({activeIndex: index +1});
        }
    }

    previousImgs() {
        let index = this.state.activeIndex;
        if( index <= 0 ) {
            this.setMemoryIndex( 0 );
            this.setState({activeIndex: this.props.quantity -1});
        }
        else{
            this.setMemoryIndex( index );
            this.setState({activeIndex: index -1});
        }
    }

    nextBlockImgs() {
        let quantity = this.props.quantity;
        this.from = this.from + quantity;
        this.to = this.to + quantity;
        this.props.getNextPreview( this.from, this.to );
    }

    previousBlockImgs() {
        let quantity = this.props.quantity;
        this.from = this.from - quantity;
        this.to = this.to - quantity;
        this.props.getPreviousPreview( this.from, this.to );

        if( this.from < 0 ) {
            this.from = 0;
            this.to = this.props.quantity -1;
        }
    }

    setNewActiveIndex( event ) {
        let target = event.target;
        let id;
        if( target.tagName === 'UL' ) return;
        target = getParentNode( target, 'LI' );
        id = +target.dataset.id;
        if( this.state.activeIndex === id ) return;
        this.setMemoryIndex( this.state.activeIndex );
        this.setState({activeIndex: id});
    }

    render() {
        const list = this.props.sliderList;
        const active = this.state.activeIndex;
        const activeItem = list[active];

        return(
            <section className="container_slider">
                <div className="title_large_slide">{activeItem ? activeItem.text : ''}</div>
                <div ref="containerSlide" className="container_large_slide">
                    <Arrow
                        handlerClick={this.previousImgs}
                        direction="left"
                        isShow />
                    <ul className="list_large_images" ref="wrapperImages" >
                        {list.map( ( item, index ) => {
                            return(
                                <li key={index} className="wrapper_images">
                                    <CreateImage
                                        className={"large_slide"}
                                        src={item.hero}
                                        isNewProps={this.newProps} />
                                </li>
                            )
                        })}
                    </ul>
                    <Arrow
                        handlerClick={this.nextImgs}
                        direction="right"
                        isShow />
                </div>
                <div></div>
                <div className="container_list_preview">
                    <Arrow
                        handlerClick={this.previousBlockImgs}
                        direction="left"
                        isShow={this.props.isPrevious}
                        width="30px" />
                    <ul className="list_preview" onClick={this.setNewActiveIndex}>
                        {list.map( ( item, index ) => {
                            return(
                                <li
                                    data-id={index}
                                    className={ active === index ? "item_preview active" : "item_preview" }
                                    key={index}>
                                    <div className="description">{item.text}</div>
                                    <div className="container_preview">
                                        <CreateImage
                                            className={"preview"}
                                            src={item.image}
                                            isNewProps={this.newProps} />
                                    </div>
                                </li>
                            )
                        })}
                    </ul>
                    <Arrow
                        handlerClick={this.nextBlockImgs}
                        direction="right"
                        width="30px"
                        isShow={this.props.isNext}/>
                </div>
            </section>
        )
    }
};

Slider.propTypes = {
    sliderList: PropTypes.array.isRequired,
    getNextPreview: PropTypes.func.isRequired,
    getPreviousPreview: PropTypes.func.isRequired,
    quantity: PropTypes.number.isRequired,
};

Slider.defaultProps = {
    leafThrough: false,
    leafThroughTime: 10000,
};

export default Slider;