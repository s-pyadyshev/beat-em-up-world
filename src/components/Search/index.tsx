import React, { useLayoutEffect, useRef } from "react";
import { filterByName } from "../../store/gamesList/actions";
import store from "../../store";
import "./style.scss";

// TODO debounce
const Search: React.SFC = () => {
  const SearchRef = useRef<HTMLInputElement>(null);

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    store.dispatch(filterByName(event.target.value));
  };

  useLayoutEffect(() => {
    if (SearchRef.current !== null) {
      SearchRef.current.focus();
    }
  }, []);

  return (
    <input
      type="search"
      placeholder="Type game name here..."
      onChange={handleInput}
      ref={SearchRef}
      className="input"
    />
  );
};

export default Search;
