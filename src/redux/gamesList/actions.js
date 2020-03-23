import {
  GET_GAMES_REQUEST,
  GET_GAMES_SUCCESS,
  GET_GAMES_ERROR,
  GET_GAME_CARD_REQUEST,
  FILTER_GAMES
} from "./constants";

export const getGamesRequest = () => {
  return {
    type: GET_GAMES_REQUEST
  }
};

export const getGamesSuccess = (gamesList) => {
  return {
    type: GET_GAMES_SUCCESS,
    gamesList
  }
};

export const getGamesError = (error) => {
  return {
    type: GET_GAMES_ERROR,
    error
  }
};


export const getGameCardRequest = (uniqGameName) => {
  return {
    type: GET_GAME_CARD_REQUEST,
    uniqGameName
  }
};

export const filterGames = (filterName, option) => {
  return {
    type: FILTER_GAMES,
    filterName,
    option
  }
};