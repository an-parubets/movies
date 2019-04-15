import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';


const mapStateToProps = state => ({
   router: state.router
});


class ScrollToTop extends React.Component {
    componentDidUpdate(prewProps) {
        if (this.props.router.location.pathname !== prewProps.location.pathname) {
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth'
            });
        }
    }

    render() {
        return this.props.children;
    }
}

export default withRouter(connect(mapStateToProps)(ScrollToTop));