import React from 'react';
import { connect } from 'react-redux';
import { getMoviesByGenre } from '../thunks';

class Genres extends React.Component {
    render() {
        const { id, name } = this.props;

        let isDisabled = false;
        if (this.props.genreId === id) {
            isDisabled = true;
        }

        return (
            <button onClick={() => !isDisabled ? this.props.onGenreChange(id) : null}>{name}</button>
        );
    }
}

const mapStateToProps = (state) => ({
    genreID: state.cards.activeGenre
});
const mapDispatchToProps = dispatch => ({
    onGenreChange: (id) => dispatch(getMoviesByGenre(id))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Genres);
