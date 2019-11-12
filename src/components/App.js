import React from 'react';
import { connect } from 'react-redux';
import { toggleCards } from '../actions';
import { getMostPopularMovies, getMovieGenres } from '../thunks';
import Card from './Card';
import Genres from './Genres'
import { getImageUrl } from '../config';

class App extends React.Component {
  componentDidMount() {
    this.props.onGetMostPopularMovies();
    this.props.onGetMovieGenres();
  }

  render() {
    return (
        <div className='container'>
          <div className='genres'>
            {this.props.movieGenres.map((genre) => (
                <Genres
                    key={genre.id}
                    id={genre.id}
                    name={genre.name}
                />
            ))}
          </div>

          <header>
            <button
                style={{ display: 'block', margin: '0 auto' }}
                onClick={() => this.props.onToggleCards(!this.props.showCards)}>
              Hide movies
            </button>
          </header>

          {this.props.showCards ? (
              <div className='cards'>
                {this.props.mostPopularMovies.map((card) => (
                    <Card
                        key={card.id}
                        id={card.id}
                        backgroundImage={getImageUrl(card.backdrop_path)}
                        date={card.release_date}
                        rating={card.vote_average}
                        votes={card.vote_count}
                        description={card.overview}
                        title={card.original_title}
                    />
                ))}
              </div>
          ) : null}
        </div>
    );
  }
}

const mapStateToProps = (state) => ({
  showCards: state.componentState.showCards,
  mostPopularMovies: state.cards.mostPopular,
  movieGenres: state.genres.movieGenres,
});
const mapDispatchToProps = dispatch => ({
  onToggleCards: (shouldShow) => dispatch(toggleCards(shouldShow)),
  onGetMostPopularMovies: () => dispatch(getMostPopularMovies()),
  onGetMovieGenres: () => dispatch(getMovieGenres())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
