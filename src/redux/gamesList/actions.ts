import {
  GET_GAMES_REQUEST,
  GET_GAMES_SUCCESS,
  GET_GAMES_ERROR,
  GET_GAME_CARD_REQUEST,
  FILTER_GAMES,
} from "./constants";

export const getGamesRequest = () => ({
  type: GET_GAMES_REQUEST,
});

export const getGamesSuccess = (gamesList) => ({
  type: GET_GAMES_SUCCESS,
  gamesList,
});

export const getGamesError = (error) => ({
  type: GET_GAMES_ERROR,
  error,
});

export const getGameCardRequest = (uniqGameName) => ({
  type: GET_GAME_CARD_REQUEST,
  uniqGameName,
});

export const filterGames = (filterName, option) => ({
  type: FILTER_GAMES,
  filterName,
  option,
});
