import { REMOVE_IMAGES, ADD_IMAGES } from '../constants/slider';

export function addImages( list ) {

    return {
        type: ADD_IMAGES,
        payload: list
    }
};

export function removeImages( data ) {

    return {
        type: REMOVE_IMAGES,
        payload: data
    }
};