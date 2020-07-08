import {
  GET_GAMES_REQUEST,
  GET_GAMES_SUCCESS,
  GET_GAMES_ERROR,
  GET_GAME_CARD_REQUEST,
  GET_GAME_CARD_SUCCESS,
  FILTER_GAMES,
  FILTER_BY_LETTER,
  FILTER_BY_NAME,
} from "./constants";
import { Games } from "../../services/api";
import store from "../../store";

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

export const getGames = () => {
  store.dispatch(getGamesRequest());

  Games.get()
    .then((data) => {
      store.dispatch(getGamesSuccess(data));
    })
    .catch((error) => store.dispatch(getGamesError(error)));
};

export const getGameCardRequest = (id: any) => ({
  type: GET_GAME_CARD_REQUEST,
  id,
});

export const getGameCardSuccess = (gameCardProps: any) => ({
  type: GET_GAME_CARD_SUCCESS,
  gameCardProps,
});

export const filterGames = (filterName: any, option: any) => ({
  type: FILTER_GAMES,
  filterName,
  option,
});

export const filterByLetter = (letter: String) => ({
  type: FILTER_BY_LETTER,
  letter,
});

export const filterByName = (input: any) => ({
  type: FILTER_BY_NAME,
  input,
});
