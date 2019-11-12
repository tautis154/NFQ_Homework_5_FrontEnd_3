import React from 'react';
import { connect } from 'react-redux';
import {setLikedMovie, setUnLikedMovie} from '../actions';

class Card extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: props.title,
            showDescription: true
        };
    }

    render() {
        const { showDescription } = this.state;
        const { id, title, backgroundImage, date, rating, votes, description} = this.props;

        let cardHeart = 'fa';
        const isLiked = this.props.likedMovies.includes(id);
        isLiked ? (cardHeart += ' fa-heart') : (cardHeart += ' fa-heart-o');

        return (
            <div className='card'>
                <div
                    className='card__image'
                    style={{
                        backgroundImage: `url(${backgroundImage})`
                    }}
                />

                <div className='card__title'>{title}</div>

                <div className='card__like'>
                    <i
                        className={cardHeart}
                        onClick={() => { isLiked  ? this.props.onDislikedMovie(id) : this.props.onLikedMovie(id)
                        }}
                    />
                </div>

                <div className='card__subtitle'>
                    <span>{date}</span>
                    <span>{rating} ({votes} votes)</span>
                </div>

                <div className='card-info'>
                    <div className='card-info__header'>Summary</div>
                    <button
                        style={{ display: 'block', margin: '0 auto' }}
                        onClick={() => { this.setState({ showDescription: !showDescription })}}>Toggle</button>
                    <div className='card-info__description'>
                        {showDescription ? description : null}
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    likedMovies: state.liked.movies
});
const mapDispatchToProps = dispatch => ({
    onLikedMovie: (movieId) => dispatch(setLikedMovie(movieId)),
    onDislikedMovie: (movieId) => dispatch(setUnLikedMovie(movieId))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Card);
