import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import players from './players';
import games from './games';
import { combineReducers } from 'redux';

const reducers = combineReducers({
  players,
  games
});

const store = createStore(
    reducers,
    applyMiddleware(thunk),
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;