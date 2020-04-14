import { applyMiddleware, createStore, combineReducers } from "redux";
import { gamesList } from "./gamesList/reducer";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";

const reducers = combineReducers({
  gamesList,
});

export const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware())
);

export default store;
