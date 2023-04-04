import { ApplicationState } from "../interfaces/ApplicationState";
import { FiltersInterface } from "../interfaces/Filters";

export const selectGamesList = (state: ApplicationState) =>
  state.gamesList.gamesList;

export const selectFilters = (state: FiltersInterface) => state.filters;
