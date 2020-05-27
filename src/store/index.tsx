import { applyMiddleware, createStore, combineReducers } from "redux";
import { gamesList } from "./gamesList/reducer";
import { filters } from "./filters/reducer";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import { logger } from "./middleware";

export const reducers: any = combineReducers({
  filters,
  gamesList,
});

export const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(logger))
);

export default store;
