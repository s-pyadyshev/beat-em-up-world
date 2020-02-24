import { createStore, combineReducers } from 'redux'
import apiService from "../apiService";

const GET_GAMES_REQUEST = "GET_GAMES_REQUEST";
const GET_GAMES_SUCCESS = "GET_GAMES_SUCCESS";
const GET_GAMES_ERROR = "GET_GAMES_REQUEST";
const SELECT_FILTER = "SELECT_FILTER";
const FILTER_GAMES = "FILTER_GAMES";

const initialState = {
  
}

const filter = (state = [], action) => {
  switch(action.type) {
    // case FILTER_GAMES:
    //   return { ...state, filteredGames: action };
      // return state;
    default:
      return state;
  }
}

export const getGamesRequest = (gamesList) => {
  return {
    type: GET_GAMES_REQUEST,
    gamesList
  }
}
export const filterGames = (option) => {
  return {
    type: FILTER_GAMES,
    option
  }
}


const gamesList = (state = [], action) => {
  switch(action.type) {
    case GET_GAMES_REQUEST:
      return { ...state, gamesList: action.gamesList, filteredGames: action.gamesList };
    case FILTER_GAMES:
      return { ...state, filteredGames: [...state.gamesList.filter(game => game.players == action.option)]}
    default:
      return state;
  }
}

const reducers = combineReducers({
  // filter,
  gamesList
});

export const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
