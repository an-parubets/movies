import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Typography, Button, List, Card } from 'antd';
import { connect } from 'react-redux';
import { getMovieDetails, getSimilarMovies } from '../../actions';
import { Poster, Info } from '../MovieCard/MovieCard';


const {
    Title,
    Paragraph,
    Text
} = Typography;


const mapStateToProps = state => ({
    details: state.movie.details,
    similar: state.movie.similar
});

const mapDispatchToProps = dispatch => ({
    getMovieDetails: id => dispatch(getMovieDetails(id)),
    getSimilar: id => dispatch(getSimilarMovies(id))
});


class MovieDetails extends Component {
    componentDidMount() {
        const id = this.props.match.params.id;

        this.fetchDataBy(id);
    }

    componentDidUpdate(prevProps) {
        const currentId = this.props.match.params.id;
        const prevId = prevProps.match.params.id;

        if (currentId !== prevId) {
            this.fetchDataBy(currentId);
        }
    }

    /**
     * @param id {number/string}
     */
    fetchDataBy(id) {
        this.props.getMovieDetails(id);
        this.props.getSimilar(id);
    }

    render() {
        const {
            title,
            overview,
            poster_path,
            vote_average,
            release_date,
            homepage,
            status,
            genres,
            spoken_languages,
            production_countries,
            production_companies
        } = this.props.details;

        const { results } = this.props.similar;

        if (!Object.keys(this.props.details).length
            || !Object.keys(this.props.similar).length) return (<div></div>);

        return (
            <Fragment>
                <Row>
                    <Col span={8}>
                        <Info average={vote_average} release={release_date} />
                    </Col>
                </Row>
                <Row>
                    <Col span={8}>
                        <Poster poster_path={poster_path} title={title} />
                    </Col>
                    <Col span={15} push={1}>
                        <Title>{title}</Title>
                        <Paragraph>{overview}</Paragraph>
                        <Paragraph>
                            <Paragraph>
                                <Text strong>Status:</Text><Text> {status}</Text>
                            </Paragraph>
                            <Paragraph>
                                <Text strong>Country:</Text><Text> {production_countries[0].name}</Text>
                            </Paragraph>
                            <Paragraph>
                                <Text strong>Company:</Text><Text> {production_companies[0].name}</Text>
                            </Paragraph>
                            <Paragraph>
                                <Text strong>Languages:</Text>{ spoken_languages.map((item, index) => <Text key={index}> {item.name},</Text>)}
                            </Paragraph>
                            <Paragraph>
                                <Text strong>Genres:</Text> { genres.map(item => <Text key={item.id}> {item.name},</Text>)}
                            </Paragraph>
                        </Paragraph>
                        <Button>
                            <a href={homepage}>Go to homepage</a>
                        </Button>
                    </Col>
                </Row>
                <Row style={{ marginTop: '100px' }}>
                    <Col>
                        <Title>Similar films</Title>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <List grid={{ gutter: 20, xs: 2, sm: 4, md: 8, lg: 8, xl: 8, xxl: 12 }}
                              dataSource={results}
                              renderItem={item => (
                                  <List.Item>
                                      <Link to={`/movie/${item.id}`}>
                                          <Card hoverable
                                                cover={<Poster poster_path={item.poster_path} title={item.title}/>}>
                                              <Card.Meta title={item.title} />
                                          </Card>
                                      </Link>
                                  </List.Item>
                              )} />
                    </Col>
                </Row>
            </Fragment>
        )
    }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MovieDetails);
