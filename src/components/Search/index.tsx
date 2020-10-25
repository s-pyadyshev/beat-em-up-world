import React, { useEffect, useRef } from "react";
import { filterByName } from "../../store/gamesList/actions";
import store from "../../store";
import "./style.scss";

// TODO debounce/throttle
const Search: React.FC = () => {
  const searchRef = useRef<HTMLInputElement>(null);

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    store.dispatch(filterByName(event.target.value));
  };

  useEffect(() => {
    if (searchRef.current !== null) {
      searchRef.current.focus();
    }
  }, []);

  return (
    <input
      type="search"
      placeholder="Type game name here..."
      onChange={handleInput}
      ref={searchRef}
      className="input"
    />
  );
};

export default Search;
