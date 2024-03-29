import {
  GET_FILTERS_REQUEST,
  GET_FILTERS_SUCCESS,
  GET_FILTERS_ERROR,
  TOGGLE_FILTER,
  TOGGLE_FILTERS,
  TOGGLE_FILTERS_ALL,
  SHOW_LESS_FILTERS,
} from "./constants";
import { Filters } from "../../services/api";
import { FilterInterface } from "../../interfaces/Filter";
import store from "..";

export const getFiltersRequest = () => ({
  type: GET_FILTERS_REQUEST,
});

export const getFiltersSuccess = (filters: FilterInterface) => ({
  type: GET_FILTERS_SUCCESS,
  filters,
});

export const getFiltersError = (error: any) => ({
  type: GET_FILTERS_ERROR,
  error,
});

export const toggleFilter = (isVisible: Boolean) => ({
  type: TOGGLE_FILTER,
  isVisible,
});

export const toggleFilters = (filters: FilterInterface) => ({
  type: TOGGLE_FILTERS,
  filters,
});

export const toggleFiltersAll = () => ({
  type: TOGGLE_FILTERS_ALL,
});

export const showLessFilters = () => ({
  type: SHOW_LESS_FILTERS,
});

export const getFilters = () => {
  store.dispatch(getFiltersRequest());

  Filters.get()
    .then((data) => {
      store.dispatch(getFiltersSuccess(data));
      store.dispatch(toggleFilters(data));
    })
    .catch((error) => store.dispatch(getFiltersError(error)));
};
