import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';
import reducers from './redusers';
import * as serviceWorker from './serviceWorker';

import App from './components/App';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(reduxThunk))
);

const Root = () => <Provider store={store}><App/></Provider>;

ReactDOM.render(<Root />, document.getElementById('root'));

serviceWorker.unregister();
