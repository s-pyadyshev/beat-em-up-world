import React, { useEffect, useRef } from "react";
import { filterByName } from "../../store/gamesList/actions";
import store from "../../store";
import "./style.scss";

// TODO debounce/throttle
const Search: React.FC = () => {
  const SearchRef = useRef<HTMLInputElement>(null);

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    store.dispatch(filterByName(event.target.value));
  };

  useEffect(() => {
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
