import API from '../api';
import {
    FETCH_LIST_FILMS,
    CLEAR_MOVIES_LIST
} from './types';


export const Movies = {
    getPopularMovies: (page = 1) => {
        return async function (dispatch) {
            const data = await API.Movies.getPopular(page);

            dispatch({
                type: FETCH_LIST_FILMS,
                payload: data
            });
        }
    },
    getTopViewsMovies: (page = 1) => {
        return async function (dispatch) {
            const data = await API.Movies.getTopViews(page);

            dispatch({
                type: FETCH_LIST_FILMS,
                payload: data
            });
        }
    },
    getUpcomingMovies: (page = 1) => {
        return async dispatch => {
            const data = await API.Movies.getUpcoming(page);

            dispatch({
                type: FETCH_LIST_FILMS,
                payload: data
            });
        }
    },
    clear: () => {
        return dispatch => {
            dispatch({
                type: CLEAR_MOVIES_LIST
            })
        }
    }
};
