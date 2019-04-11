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
    getMovieDetails: async (id) => {
        try {
            const { data } = await axios.get(endpoint.GET_MOVIE_DETAILS(id));

            return data;
        } catch (error) {
            console.log(error)
        }
    }
};

export default {
    Movies
}
