import { combineReducers } from 'redux';

import movies from './movies';
import details from './details';

export default combineReducers({
    movies,
    details
});
