import React, { useEffect, useRef, useState } from "react";
import { useDebounce } from "../../hooks/useDebounce";
import { filterByName } from "../../store/gamesList/actions";
import store from "../../store";
import "./style.scss";

const Search: React.FC = () => {
  const searchRef = useRef<HTMLInputElement>(null);
  const [searchTerm, setSearchTerm] = useState("");

  const debouncedSearch = useDebounce(searchTerm, 500);

  useEffect(() => {
    if (debouncedSearch) {
      store.dispatch(filterByName(searchTerm));
    }
  }, [debouncedSearch]);

  useEffect(() => {
    if (searchRef.current !== null) {
      searchRef.current.focus();
    }
  }, []);

  return (
    <input
      type="search"
      placeholder="Type game name here . . ."
      onChange={(event) => setSearchTerm(event.target.value)}
      ref={searchRef}
      className="input input-search"
    />
  );
};

export default Search;
