import React, { Component } from 'react';

export const cardListWithCategory = WrappedComponent => {
    return class extends Component {
        componentDidMount() {
            const page = this.props.match.params.page;

            this.props.getList(page);
        }

        componentWillUnmount() {
            this.props.clear();
        }

        render() {
            const { movies, getList } = this.props;

            return <WrappedComponent movies={movies} getList={getList} />
        }
    }
};
