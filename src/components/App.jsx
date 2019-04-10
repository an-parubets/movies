import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import CardList from './CardList/CardList';
import MovieDetails from './MovieDetails/MovieDetails';

export default function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={CardList} />
                <Route path='/movie/:id' component={MovieDetails} />
            </Switch>
        </Router>
    )
}