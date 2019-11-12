import axios from 'axios';
import { setMostPopularMovies, setMovieGenres } from './actions';
import { endpoints } from './config';

export const getMostPopularMovies = () => dispatch => {
    axios
        .get(endpoints.mostPopularMovies())
        .then((data) => {
        dispatch(setMostPopularMovies(data.data.results));
    })
};

export const getMovieGenres = () => dispatch => {
    axios
        .get(endpoints.genres())
        .then((data) => {
        dispatch(setMovieGenres(data.data.genres));
    })
};

export const getMoviesByGenre = (id )=> dispatch => {
    axios
        .get(endpoints.genreMovies(id))
        .then((data) => {
        dispatch(setMostPopularMovies(data.data.results));
    })
};