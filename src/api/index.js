import axios from 'axios';
import * as endpoint from './endpoints';

export default {
    getPopularMovies: async () => {
        try {
            const { data } = await axios.get(endpoint.GET_POPULAR_MOVIES());

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
    }
}
