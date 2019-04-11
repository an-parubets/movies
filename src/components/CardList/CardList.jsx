import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { css } from 'aphrodite';

import { Layout, List, Icon } from 'antd';
import { MovieCard } from '../MovieCard/MovieCard';
import { getPopularMovies } from '../../actions';
import { styles } from './CardListStyles';

const mapStateToProps = state => ({
    movies: state.movies
});

const mapDispatchToProps = dispatch => ({
    getPopularMovies: (page) => dispatch(getPopularMovies(page))
});


class CardList extends PureComponent {

    componentDidMount() {
        this.props.getPopularMovies();
    }
    
    render() {
        const moviesList = this.props.movies.results;

        if (!moviesList) {
            return <Icon type="loading" />
        }

        return (
            <Layout.Content className={css(styles.container)}>
                <List grid={{ gutter: 20, xs: 1, sm: 2, md: 4, lg: 4, xl: 4, xxl: 6 }}
                    dataSource={moviesList}
                    renderItem={item => (
                        <List.Item>
                            <MovieCard data={item} />
                        </List.Item>
                    )} />
            </Layout.Content>
        )
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CardList);