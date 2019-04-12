import {
    FETCH_LIST_FILMS,
} from '../actions/types';

export default (state = {}, action) => {
    switch (action.type) {
        case FETCH_LIST_FILMS: {
            return { ...state, ...action.payload };
        }
        default:
            return state
    }
}