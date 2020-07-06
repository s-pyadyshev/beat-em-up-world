import React from "react";
import { debounce } from "lodash";

const Search: React.SFC = () => {
  const handleInput = (event: any) => {
    // const make = () => {
    console.log(event.target.value);
    // };
    // debounce(make, 500, { maxWait: 1000 });
  };

  return (
    <input
      type="search"
      placeholder="Type game name here..."
      onChange={handleInput}
    />
  );
};

export default Search;
