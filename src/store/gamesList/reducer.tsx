import { filter, omit } from "lodash";
import {
  GET_GAMES_REQUEST,
  GET_GAMES_SUCCESS,
  GET_GAMES_ERROR,
  GET_GAME_CARD_REQUEST,
  GET_GAME_CARD_SUCCESS,
  GET_GAME_CARD_ERROR,
  FILTER_GAMES,
  FILTER_BY_LETTER,
  FILTER_BY_NAME,
} from "./constants";

const arrayOptions = ["music", "weapons", "variety", "gore"];

export const gamesList = (state: any = [], action: any) => {
  let filterOptions = { ...state.filterOptions };

  switch (action.type) {
    case GET_GAMES_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case GET_GAMES_SUCCESS:
      return {
        ...state,
        gamesList: action.gamesList,
        filteredGames: action.gamesList,
        loading: false,
        error: null,
      };
    case GET_GAMES_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case GET_GAME_CARD_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case GET_GAME_CARD_SUCCESS:
      return {
        ...state,
        gameCardDetails: action.gameCardDetails,
        loading: false,
        error: null,
      };
    case GET_GAME_CARD_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
      };
    case FILTER_GAMES:
      // if --Select an option--
      if (action.option === "") {
        filterOptions = omit(state.filterOptions, action.filterName);
        const filteredList = filter(state.gamesList, filterOptions);

        return {
          ...state,
          filterOptions,
          filteredGames: filteredList,
        };
      }
      // hardcode solution for array values
      if (arrayOptions.includes(action.filterName)) {
        filterOptions[action.filterName] = [action.option];
      } else {
        filterOptions[action.filterName] = action.option;
      }

      return {
        ...state,
        filterOptions,
        filteredGames: filter(state.gamesList, filterOptions),
      };
    case FILTER_BY_LETTER:
      return {
        ...state,
        filteredGames: state.gamesList.filter(
          (game: any) => game.name.toLowerCase()[0] === action.letter
        ),
      };
    case FILTER_BY_NAME:
      return {
        ...state,
        filteredGames: state.gamesList.filter((game: any) =>
          game.name.toLowerCase().includes(action.input.toLowerCase())
        ),
      };
    default:
      return state;
  }
};

export default gamesList;
