import { createStore, combineReducers } from "redux";
import { gamesList } from "./gamesList/reducer";

const reducers = combineReducers({
  gamesList,
});

export const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
