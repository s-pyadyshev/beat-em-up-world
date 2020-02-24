import { createStore, combineReducers } from 'redux'
import apiService from "../apiService";

const GET_GAMES_REQUEST = "GET_GAMES_REQUEST";
const GET_GAMES_SUCCESS = "GET_GAMES_SUCCESS";
const GET_GAMES_ERROR = "GET_GAMES_REQUEST";

const initialState = {
  players: 1
}

const filter = (state = initialState, action) => {
  return state;
}

export const getGamesRequest = (gamesList) => {
  return {
    type: GET_GAMES_REQUEST,
    gamesList
  }
}

const gamesList = (state = [], action) => {
  switch(action.type) {
    case GET_GAMES_REQUEST:
      return { ...state, gamesList: action.gamesList };
    default:
      return state;
  }
}

const reducers = combineReducers({
  filter,
  gamesList
});

export const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
