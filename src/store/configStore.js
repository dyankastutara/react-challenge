import { createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import rootReducers from '../reducers';

const middlewares = applyMiddleware(logger,thunk)
const store = createStore(rootReducers, middlewares);

export default store;
