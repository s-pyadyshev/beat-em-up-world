import {
  GET_GAMES_REQUEST,
  GET_GAMES_SUCCESS,
  GET_GAMES_ERROR,
  GET_GAME_CARD_REQUEST,
  GET_GAME_CARD_SUCCESS,
  FILTER_GAMES,
  FILTER_BY_LETTER,
  FILTER_BY_NAME,
  FILTER_BY_VALUE,
  RESET_FILTER,
  FILTER_BY_OPTIONS,
  TOGGLE_SAVE_FILTERS,
} from "./constants";
import { Games } from "../../services/api";
import { IApplicationState } from "../../interfaces/ApplicationState";
import { GameCardType } from "../../types/GameCard";

import store from "../../store";

export const getGamesRequest = () => ({
  type: GET_GAMES_REQUEST,
});

export const getGamesSuccess = (gamesList: IApplicationState) => ({
  type: GET_GAMES_SUCCESS,
  gamesList,
});

export const getGamesError = (error: string) => ({
  type: GET_GAMES_ERROR,
  error,
});

export const getGames = () => {
  store.dispatch(getGamesRequest());

  Games.get()
    .then((data) => {
      store.dispatch(getGamesSuccess(data));
    })
    // .then(() => {
    //   store.dispatch(filterByLetter("a"));
    // })
    .catch((error) => store.dispatch(getGamesError(error)));
};

export const getGameCardRequest = (id: string) => ({
  type: GET_GAME_CARD_REQUEST,
  id,
});

export const getGameCardSuccess = (gameCardDetails: GameCardType) => ({
  type: GET_GAME_CARD_SUCCESS,
  gameCardDetails,
});

export const filterGames = (filterName: string, option: any) => ({
  type: FILTER_GAMES,
  filterName,
  option,
});

export const filterByLetter = (letter: string) => ({
  type: FILTER_BY_LETTER,
  letter,
});

export const filterByName = (input: string | Number) => ({
  type: FILTER_BY_NAME,
  input,
});

export const filterByValue = (input: string | Number) => ({
  type: FILTER_BY_VALUE,
  input,
});

export const resetFilter = () => ({
  type: RESET_FILTER,
});

export const filterByOptions = (filterOptions: string) => ({
  type: FILTER_BY_OPTIONS,
  filterOptions,
});

export const toggleSaveFilters = () => ({
  type: TOGGLE_SAVE_FILTERS,
});
