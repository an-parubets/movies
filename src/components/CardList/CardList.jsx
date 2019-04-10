import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { css } from 'aphrodite';

import { List } from '../shared/List';
import { MovieCard } from '../MovieCard/MovieCard';
import { getPopularMovies } from '../../actions';

import { styles } from './CardListStyles';

class CardList extends PureComponent {
    componentDidMount() {
        this.props.getPopularMovies();
    }
    
    render() {
        const moviesList = this.props.movies.results;

        if (!moviesList) {
            return <div></div>
        }

        return (
            <div className={css(styles.movies)}>
                <List list={moviesList}>{ MovieCard }</List>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        movies: state.movies
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getPopularMovies: (page) => dispatch(getPopularMovies(page))
    }
};


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CardList);