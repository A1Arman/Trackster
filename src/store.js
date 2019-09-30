import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';
import reducers  from './reducers';
import { createLogger } from 'redux-logger';

const logger = createLogger();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
    reducers, 
    composeEnhancers(applyMiddleware(reduxThunk, logger))
);