import React from 'react';
import { Route } from 'react-router-dom';

import CardList from '../CardList/CardList';
import MovieDetails from '../MovieDetails/MovieDetails';

export default function Routes() {
    return (
        <React.Fragment>
            <Route exact path="/t" component={CardList} />
            <Route path='/movie/:id' component={MovieDetails} />
        </React.Fragment>
    )
}