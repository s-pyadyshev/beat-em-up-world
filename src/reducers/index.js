import filterPlayers from './filterPlayers';
import fetchGames from './fetchGames';
import { combineReducers } from 'redux';

const reducers = combineReducers({
  filterPlayers,
  fetchGames
});

export default reducers;
