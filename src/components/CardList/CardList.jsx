import React, { PureComponent, Fragment } from 'react';
import { List, Pagination, Icon } from 'antd';
import { MovieCard } from '../MovieCard/MovieCard';


class CardList extends PureComponent {
    constructor() {
        super();

        this.onChangePagination = this.onChangePagination.bind(this);
    }
    
    render() {
        const {
            page,
            results,
            total_pages,
        } = this.props.movies;

        if (!results) {
            return <Icon type="loading" />
        }

        return (
            <Fragment>
                <List grid={{ gutter: 20, xs: 1, sm: 2, md: 4, lg: 4, xl: 4, xxl: 6 }}
                    dataSource={results}
                    renderItem={item => (
                        <List.Item>
                            <MovieCard data={item} />
                        </List.Item>
                    )} />

                <Pagination
                    current={page}
                    total={total_pages}
                    pageSize={results.length}
                    onChange={this.onChangePagination} />
            </Fragment>
        )
    }

    /**
     * @param page {number}
     * @param pageSize {number}
     */
    onChangePagination(page, pageSize) {
        this.props.getPopularMovies(page);
        this.props.history.push(`/${page}`);
    }
}

export default CardList
