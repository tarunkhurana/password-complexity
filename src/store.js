import { applyMiddleware, compose, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import rootReducer from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancers = composeEnhancers(applyMiddleware(...[createLogger()]));

export default () => {
  // return createStore(rootReducer, applyMiddleware(createLogger()));
  return createStore(rootReducer, enhancers);
};
