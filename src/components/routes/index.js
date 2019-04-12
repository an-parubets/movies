import React, { Fragment } from 'react';
import { Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import loadable from '@loadable/component'

const PopularList = loadable(() => import('../CardList/PopularList'));
const LatestList = loadable(() => import('../CardList/LatestList'));
const MovieDetails = loadable(() => import('../MovieDetails/MovieDetails'));

export default function Routes() {
    return (
        <Fragment>
            <Route exact path='/:page?' component={PopularList} />
            <Route path='/latest/:page?' component={LatestList} />
            <Route path='/movie/:id' component={MovieDetails} />
            <Route path='/test/:id' component={Test} />
        </Fragment>
    )
}


class Test extends React.Component {
    componentDidMount() {
        console.log('Console');
    }

    render () {
        const id = this.props.match.params.id;

        return (
            <div>
                {id}
                <div>
                    <Link to='/test/1'>Link 1</Link>
                    <Link to='/test/2'>Link 2</Link>
                    <Link to='/test/3'>Link 3</Link>
                    <Link to='/test/4'>Link 4</Link>
                </div>
            </div>
        )
    }
}

const TestC = connect()(Test);

