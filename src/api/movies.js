import axios from 'axios';
import * as endpoint from './endpoints';

export const Movies = {
    getPopular: async (page = 1) => {
        try {
            const {data} = await axios.get(endpoint.GET_POPULAR_MOVIES(page));

            return data;
        } catch (error) {
            console.log(error);
        }
    },
    getTopViews: async (page = 1) => {
        try {
            const {data} = await axios.get(endpoint.GET_TOP_VIEWS_MOVIES(page));

            return data;
        } catch (error) {
            console.log(error);
        }
    },
    getUpcoming: async (page = 1) => {
        try {
            const {data} = await axios.get(endpoint.GET_UPCOMING_MOVIES(page));

            return data;
        } catch (error) {
            console.log(error);
        }
    }
};
