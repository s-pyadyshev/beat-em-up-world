import {
  GET_GAMES_REQUEST,
  GET_GAMES_SUCCESS,
  GET_GAMES_ERROR,
  GET_GAME_CARD_REQUEST,
  GET_GAME_CARD_SUCCESS,
  FILTER_GAMES,
} from "./constants";

export const getGamesRequest = () => ({
  type: GET_GAMES_REQUEST,
});

export const getGamesSuccess = (gamesList: any) => ({
  type: GET_GAMES_SUCCESS,
  gamesList,
});

export const getGamesError = (error: any) => ({
  type: GET_GAMES_ERROR,
  error,
});

export const getGameCardRequest = (id: any) => ({
  type: GET_GAME_CARD_REQUEST,
  id,
});

export const getGameCardSuccess = (gameCardDetails: any) => ({
  type: GET_GAME_CARD_SUCCESS,
  gameCardDetails,
});

export const filterGames = (filterName: any, option: any) => ({
  type: FILTER_GAMES,
  filterName,
  option,
});
