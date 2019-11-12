export const toggleCards = (shouldShow) => ({
  type: 'toggleCards',
  shouldShow,
});

export const setMostPopularMovies = (list, genreId) => ({
  type: 'setMostPopularMovies',
  list,
  genreId,
});

export const setMovieGenres = (genres) => ({
  type: 'setMovieGenres',
  genres,
});

export const setLikedMovie = (movieId) => ({
  type: 'setLiked',
  movieId,
});

export const setUnLikedMovie = (movieId) => ({
  type: 'setUnLiked',
  movieId,
});