import {
    FETCH_LIST_FILMS,
    CLEAR_MOVIES_LIST
} from '../actions/types';


const initialState = {
    movies: {}
};


export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_LIST_FILMS: {
            return {
                ...state,
                movies: {
                    ...state.movies,
                    ...action.payload
                }
            };
        }
        case CLEAR_MOVIES_LIST: {
            return {
                ...state,
                movies: {}
            };
        }
        default:
            return state
    }
}