import axios from 'axios';
import * as endpoint from './endpoints';

const Movies = {
    getPopular: async (page = 1) => {
        try {
            const { data } = await axios.get(endpoint.GET_POPULAR_MOVIES(page));

            return data;
        } catch (error) {
            console.log(error);
        }
    },
    getLatest: async (page = 1) => {
        try {
            const { data } = await axios.get(endpoint.GET_LATEST_MOVIES(page));

            return data;
        } catch (error) {
            console.log(error);
        }
    },
    getMovieDetails: async (id) => {
        try {
            const { data } = await axios.get(endpoint.GET_MOVIE_DETAILS(id));

            return data;
        } catch (error) {
            console.log(error)
        }
    },
    getSimilar: async (id) => {
        try {
            const { data } = await axios.get(endpoint.GET_SIMILAR_MOVIES(id));

            return data;
        } catch (error) {
            console.log(error)
        }
    }
};

export default {
    Movies
}
