import {
    FETCH_MOVIE_DETAILS,
    FETCH_SIMILAR_FILMS,
    CLEAR_MOVIE_DETAILS
} from '../actions/types';


const initialState = {
    details: {},
    similar: {}
};


export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_MOVIE_DETAILS: {
            return {
                ...state,
                details: {
                    ...state.details,
                    ...action.payload
                },
                similar: {
                    ...state.similar
                }
            }
        }
        case FETCH_SIMILAR_FILMS: {
            return {
                ...state,
                details: {
                    ...state.details
                },
                similar: {
                    ...state.similar,
                    ...action.payload
                }
            }
        }
        case CLEAR_MOVIE_DETAILS: {
            return { }
        }
        default:
            return state
    }
}