import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import reducers from './redusers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const history = createBrowserHistory();
export const store = createStore(
    reducers(history),
    composeEnhancers(applyMiddleware(routerMiddleware(history), thunk))
);
