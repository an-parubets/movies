import API from '../api';
import {
    FETCH_MOVIE_DETAILS,
    FETCH_SIMILAR_FILMS
} from './types';


export const Movie = {
    getMovieDetails: id => {
        return async dispatch => {
            const data = await API.Movie.getMovieDetails(id);

            dispatch({
                type: FETCH_MOVIE_DETAILS,
                payload: data
            });
        }
    },
    getSimilarMovies: id => {
        return async dispatch => {
            const data = await API.Movie.getSimilar(id);

            dispatch({
                type: FETCH_SIMILAR_FILMS,
                payload: data
            });
        }
    }
};
