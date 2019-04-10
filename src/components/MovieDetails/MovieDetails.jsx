import React, { PureComponent } from 'react';
import { getMovieDetails } from '../../actions';
import { connect } from 'react-redux';


class MovieDetails extends PureComponent {
    componentDidMount() {
        const id = this.props.match.params.id;

        this.props.getMovieDetails(id);
    }

    render() {
        return (
            <div>srge</div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        details: state.details
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getMovieDetails: (id) => dispatch(getMovieDetails(id))
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MovieDetails);
