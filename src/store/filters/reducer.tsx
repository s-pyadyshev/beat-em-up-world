import {
  GET_FILTERS_REQUEST,
  GET_FILTERS_SUCCESS,
  GET_FILTERS_ERROR,
  TOGGLE_FILTERS,
  TOGGLE_FILTERS_ALL,
  SHOW_LESS_FILTERS,
} from "./constants";

const basicFilters = [
  "platform",
  "perspective",
  "series",
  "players",
  "releaseYear",
  "multigenre",
  "difficulty",
  "variety",
  "grabs",
  "groundHit",
  "artStyle",
  "setting",
  "focus",
  "music",
  "gore",
  "fighters",
];

export const filters = (state: any = [], action: any) => {
  switch (action.type) {
    case GET_FILTERS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case GET_FILTERS_SUCCESS:
      return {
        ...state,
        filters: action.filters,
        filtersToggled: action.filters,
        loading: false,
        error: null,
      };
    case GET_FILTERS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case TOGGLE_FILTERS:
      return {
        ...state,
        filtersToggled: action.filters.filter((item: any) =>
          basicFilters.includes(item.name)
        ),
        basicView: true,
      };
    case TOGGLE_FILTERS_ALL:
      return {
        ...state,
        filtersToggled: state.filters,
        basicView: false,
      };
    case SHOW_LESS_FILTERS:
      return {
        ...state,
        filtersToggled: state.filters.filter((item: any) =>
          basicFilters.includes(item.name)
        ),
        basicView: true,
      };
    default:
      return state;
  }
};

export default filters;
