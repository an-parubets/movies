import React, { PureComponent } from 'react';
import { Layout, Row, Col, Card } from 'antd';
import { connect } from 'react-redux';
import { getMovieDetails } from '../../actions';
import { Poster, Info } from '../MovieCard/MovieCard';

/**
 * @param state
 * @return {{details: *}}
 */
const mapStateToProps = state => ({
    details: state.details
});

/**
 * @param dispatch
 * @return {{getMovieDetails: (function(*=): *)}}
 */
const mapDispatchToProps = dispatch => ({
    getMovieDetails: (id) => dispatch(getMovieDetails(id))
});


class MovieDetails extends PureComponent {
    componentDidMount() {
        const id = this.props.match.params.id;

        this.props.getMovieDetails(id);
    }

    render() {
        console.log(this.props.details);

        const {
            id,
            title,
            poster_path,
            vote_average,
            release_date
        } = this.props.details;

        return (
            <Layout>
                <Layout.Content>
                    <Row>
                        <Col>
                            <Info average={vote_average} release={release_date} />
                        </Col>
                    </Row>
                </Layout.Content>
            </Layout>
        )
    }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MovieDetails);
