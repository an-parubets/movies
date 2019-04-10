import {
    FETCH_MOVIE_DETAILS,
    CLEAR_MOVIE_DETAILS
} from '../actions/types';

export default (state = {}, action) => {
    switch (action.type) {
        case FETCH_MOVIE_DETAILS: {
            return { ...state, ...action.payload }
        }
        case CLEAR_MOVIE_DETAILS: {
            return { ...state, ...{} }
        }
        default:
            return state
    }
}