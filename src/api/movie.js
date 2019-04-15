import axios from 'axios';
import * as endpoint from './endpoints';

export const Movie = {
    getMovieDetails: async id => {
        try {
            const { data } = await axios.get(endpoint.GET_MOVIE_DETAILS(id));

            return data;
        } catch (error) {
            console.log(error)
        }
    },
    getSimilar: async id => {
        try {
            const { data } = await axios.get(endpoint.GET_SIMILAR_MOVIES(id));

            return data;
        } catch (error) {
            console.log(error)
        }
    }
};

