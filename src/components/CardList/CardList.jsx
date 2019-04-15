import React, { Fragment } from 'react';
import { List, Pagination, Spin } from 'antd';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import { StyleSheet, css } from 'aphrodite';
import { MovieCard } from '../MovieCard/MovieCard';


const mapStateToProps = state => ({
    router: state.router
});

const mapDispatchToProps = dispatch => ({
    historyPush: url => dispatch(push(url))
});

const styles = StyleSheet.create({
    loader: {
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'center',
        height: '85vh',
        width: '100%'
    }
});


const CardList = props => {
    const { page, results, total_pages } = props.movies;
    const pathName = props.router.location.pathname;

    const onChangePagination = page => {
        props.getList(page);
        props.historyPush(`${pathName}/${page}`);
    };

    if (!results) return <Spin className={css(styles.loader)} type='loading' size='large' />;

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
                onChange={onChangePagination} />
        </Fragment>
    )
};


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CardList);
