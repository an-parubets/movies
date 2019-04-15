import { connect } from 'react-redux';
import { compose } from 'redux';
import { cardListWithCategory } from '../../hocs/cardListWithCategory';
import { withLoader } from '../../hocs/withLoader';
import { Movies } from '../../actions';
import CardList from './CardList';


const mapStateToProps = state => ({
    movies: state.movies.movies
});

const mapDispatchToProps = dispatch => ({
    getList: page => dispatch(Movies.getTopViewsMovies(page)),
    clear: () => dispatch(Movies.clear())
});


export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    cardListWithCategory
)(CardList);
