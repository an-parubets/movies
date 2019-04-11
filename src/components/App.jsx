import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import loadable from '@loadable/component'

import Header from './Header/Header';

const CardList = loadable(() => import('./CardList/CardList'));
const MovieDetails = loadable(() => import('./MovieDetails/MovieDetails'));

export default function App() {
    return (
        <Fragment>
            <Router>
                <Header />
                <Switch>
                    <Route exact path="/" component={CardList} />
                    <Route path='/movie/:id' component={MovieDetails} />
                </Switch>
            </Router>
        </Fragment>
    )
}