import { filter, omit } from "lodash";
import {
  GET_GAMES_REQUEST,
  GET_GAMES_SUCCESS,
  GET_GAMES_ERROR,
  GET_GAME_CARD_REQUEST,
  FILTER_GAMES,
} from "./constants";

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
        filterOptions: {},
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
    case FILTER_GAMES:
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
      if (
        action.filterName === "weapons" ||
        action.filterName === "variety" ||
        action.filterName === "gore"
      ) {
        filterOptions[action.filterName] = [action.option];
      } else {
        filterOptions[action.filterName] = action.option;
      }

      return {
        ...state,
        filterOptions,
        filteredGames: filter(state.gamesList, filterOptions),
      };
    default:
      return state;
  }
};

export default gamesList;
