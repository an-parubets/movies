import api from '../api';
import {
    FETCH_POPULAR_FILMS,
    FETCH_MOVIE_DETAILS,
} from './types';

export const getPopularMovies = (page = 1) => {
    return async function (dispatch) {
        const data = await api.getPopularMovies(page);

        dispatch({
            type: FETCH_POPULAR_FILMS,
            payload: data
        });
    }
};

export const getMovieDetails = id => {
    return async function (dispatch) {
        const data = await api.getMovieDetails(id);

        dispatch({
            type: FETCH_MOVIE_DETAILS,
            payload: data
        });
    }
};