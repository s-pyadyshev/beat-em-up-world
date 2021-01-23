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
  RESET_FILTER,
} from "./constants";

const arrayOptions = ["music", "weapons", "variety", "gore"];
const initialState = {
  activeLetter: "",
  isFiltered: false,
  loading: false,
  error: null,
  gamesList: [],
  filteredGames: [],
};

export const gamesList = (state: any = initialState, action: any) => {
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
        isFiltered: true,
      };
    case FILTER_BY_LETTER: {
      let filteredGamesByFirstLetter;

      if (action.letter === "0-?") {
        const notAlphabetLetters = [
          "0",
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "!",
          "?",
        ];

        filteredGamesByFirstLetter = state.gamesList.filter((game: any) =>
          notAlphabetLetters.includes(game.name.toLowerCase()[0])
        );
      } else {
        filteredGamesByFirstLetter = state.gamesList.filter(
          (game: any) => game.name.toLowerCase()[0] === action.letter
        );
      }

      return {
        ...state,
        filteredGames: filteredGamesByFirstLetter,
        isFiltered: true,
        activeLetter: action.letter,
      };
    }
    case FILTER_BY_NAME: {
      const filteredGamesByName = state.gamesList.filter((game: any) =>
        game.name.toLowerCase().includes(action.input.toLowerCase())
      );
      return {
        ...state,
        filteredGames: filteredGamesByName,
        isFiltered: true,
      };
    }
    case RESET_FILTER:
      return {
        ...state,
        filteredGames: state.gamesList,
        filterOptions: "",
        isFiltered: false,
        activeLetter: "",
      };
    default:
      return state;
  }
};

export default gamesList;
