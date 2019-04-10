import {
    FETCH_POPULAR_FILMS,
} from '../actions/types';

export default (state = {}, action) => {
    switch (action.type) {
        case FETCH_POPULAR_FILMS: {
            return { ...state, ...action.payload };
        }
        default:
            return state
    }
}