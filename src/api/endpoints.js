const API_URL = 'http://api.themoviedb.org/3';
const API_KEY = 'bb7a11cd6a1d5de4383d944de3f619fa';

export const GET_POPULAR_MOVIES = () => `${API_URL}/movie/popular?api_key=${API_KEY}`;
export const GET_MOVIE_DETAILS = (id) => `${API_URL}/movie/${id}?api_key=${API_KEY}`;