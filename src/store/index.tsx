import { applyMiddleware, createStore, combineReducers, Reducer } from "redux";
import { gamesList } from "./gamesList/reducer";
import { filters } from "./filters/reducer";
import { composeWithDevTools } from '@redux-devtools/extension';
import { logger } from "./middleware";
import { IApplicationState } from "../interfaces/ApplicationState";

export const reducers: Reducer<IApplicationState> =
  combineReducers<IApplicationState>({
    filters,
    gamesList,
  });

export const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(logger))
);

export default store;
