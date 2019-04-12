import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import CardList from './CardList';
import { getLatestMovies } from '../../actions';


const mapStateToProps = state => ({
    movies: state.movies
});

const mapDispatchToProps = dispatch => ({
    getLatestMovies: page => dispatch(getLatestMovies(page))
});


export class LatestList extends PureComponent {
    componentDidMount() {
        const page = this.props.match.params.page;

        this.props.getLatestMovies(page);
    }

    render() {
        const movies = this.props.movies;

        return <CardList movies={movies} />
    }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LatestList);