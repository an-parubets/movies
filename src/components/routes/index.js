import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import loadable from '@loadable/component'


const PopularList  = loadable(() => import('../CardList/PopularList'));
const TopViewsList = loadable(() => import('../CardList/TopViewsList'));
const UpcomingList = loadable(() => import('../CardList/UpcomingList'));
const MovieDetails = loadable(() => import('../MovieDetails/MovieDetails'));


export default function Routes() {
    return (
        <Switch>
            <Redirect exact from='/' to='/popular' />

            <Route exact path='/popular/:page?' component={PopularList} />
            <Route exact path='/top/:page?' component={TopViewsList} />
            <Route exact path='/upcoming/:page?' component={UpcomingList} />
            <Route exact path='/movie/:id' component={MovieDetails} />
        </Switch>
    )
}

