import { combineReducers } from 'redux';

const initialState = {
  showCards: true,
};

const initialStateOfCards = {
  mostPopular: []
};

const initialStateOfGenres = {
  movieGenres: []
};

const initialStateOfLiked = {
  movies: []
};

const cards = (state = initialStateOfCards, action) => {
  switch (action.type) {
    case 'setMostPopularMovies':
      return {
        ...state,
        mostPopular: action.list,
        activeGenre: action.genreId
      };
    default: return state;
  }
};

const genres = (state = initialStateOfGenres, action) => {
  switch (action.type) {
    case 'setMovieGenres':
      return {
        ...state,
        movieGenres: action.genres
      };
    default: return state;
  }
};

const liked = (state = initialStateOfLiked, action) => {
  switch (action.type) {
    case 'setLiked':
      return {
        ...state,
        movies: [...state.movies, action.movieId]
      };
    case 'setUnLiked':
      return {
        ...state,
        movies: state.movies.filter(id => id !== action.movieId)
      };
    default: return state;
  }
};

const componentState = (state = initialState, action) => {
  switch (action.type) {
    case 'toggleCards': return {
      ...state,
      showCards: action.shouldShow,
    };
    default: return state;
  }
};


export const rootReducer = combineReducers({
  componentState,
  cards,
  genres,
  liked
});
