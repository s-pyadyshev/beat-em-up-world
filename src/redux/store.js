import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import games from './games';
import { combineReducers } from 'redux';

const composeEnhancer = window.REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose;

const reducers = combineReducers({
  games
});

const store = createStore(
    reducers,
    composeEnhancer(
      applyMiddleware(thunk),
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

export default store;
