import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import CardList from './CardList';
import { getPopularMovies } from '../../actions';


const mapStateToProps = state => ({
    movies: state.movies
});

const mapDispatchToProps = dispatch => ({
    getPopularMovies: page => dispatch(getPopularMovies(page))
});


export class PopularList extends PureComponent {
    componentDidMount() {
        const page = this.props.match.params.page;

        this.props.getPopularMovies(page);
    }

    render() {
        const movies = this.props.movies;

        return <CardList movies={movies} />
    }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PopularList);