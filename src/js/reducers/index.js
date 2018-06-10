import { REMOVE_IMAGES, ADD_IMAGES } from '../constants/slider';

const initialState = {
    slider: [],
    isNext: true,
    isPrevious: false,
};

export default function slider( state = initialState, action ) {
    switch (action.type) {
        case ADD_IMAGES:
            return {
                ...state,
                isPrevious: state.slider.length > 0,
                isNext: action.payload.isNext,
                slider: state.slider.concat( action.payload.list ),
            }
            break;
        case REMOVE_IMAGES:
            let total = action.payload.to - ( action.payload.from - 1 );
            return {
                ...state,
                isPrevious: action.payload.from > 0,
                isNext: true,
                slider: state.slider.slice( 0, state.slider.length - total ),
            }
            break;
        default:
            return state;
    }
    return state;
};