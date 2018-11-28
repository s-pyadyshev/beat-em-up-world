import filterPlayers from './filterPlayers';
import fetchGames from './fetchGames';
import { combineReducers } from 'redux';

const reducers = combineReducers({
  filterPlayers,
  fetchGames
});

// const reducers = fetchGames;

export default reducers;
