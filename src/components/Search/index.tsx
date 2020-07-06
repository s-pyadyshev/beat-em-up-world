import React from "react";
import { filterByName } from "../../store/gamesList/actions";
import store from "../../store";
import "./style.scss";

// TODO autofocus (useRef), debounce
const Search: React.SFC = () => {
  const handleInput = (event: any) => {
    store.dispatch(filterByName(event.target.value));
  };

  return (
    <input
      type="search"
      placeholder="Type game name here..."
      onChange={handleInput}
      className="input"
    />
  );
};

export default Search;
