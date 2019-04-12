import API from '../api';
import {
    FETCH_LIST_FILMS,
    FETCH_MOVIE_DETAILS,
    FETCH_SIMILAR_FILMS
} from './types';

export const getPopularMovies = (page = 1) => {
    return async function (dispatch) {
        const data = await API.Movies.getPopular(page);

        dispatch({
            type: FETCH_LIST_FILMS,
            payload: data
        });
    }
};

export const getLatestMovies = (page = 1) => {
    return async function (dispatch) {
        const data = await API.Movies.getLatest(page);

        dispatch({
            type: FETCH_LIST_FILMS,
            payload: data
        });
    }
};

export const getMovieDetails = id => {
    return async function (dispatch) {
        const data = await API.Movies.getMovieDetails(id);

        dispatch({
            type: FETCH_MOVIE_DETAILS,
            payload: data
        });
    }
};

export const getSimilarMovies = (id) => {
    return async function (dispatch) {
        const data = await API.Movies.getSimilar(id);

        dispatch({
            type: FETCH_SIMILAR_FILMS,
            payload: data
        });
    }
};
