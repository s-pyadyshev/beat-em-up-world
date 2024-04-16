import { IApplicationState } from "../interfaces/ApplicationState";
import { FiltersInterface } from "../interfaces/Filters";

export const selectGamesList = (state: IApplicationState) =>
  state?.gamesList?.gamesList;

export const selectFilters = (state: FiltersInterface) => state.filters;
