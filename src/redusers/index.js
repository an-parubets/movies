import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';


import movies from './movies';
import movie from './movie';


export default (history) => combineReducers({
    router: connectRouter(history),
    movies,
    movie
});
