import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import Select from "../Select";

const Filter = () => {
  const [filters, setFilters] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("https://raw.githubusercontent.com/s-pyadyshev/beat-em-ups-api/master/beatemups-filter.json")
      .then(res => res.json())
      .then(result => {
        setFilters(result);
      });
  }, [dispatch]);

  const handleSelect = (event) => {
    // dispatch(filterGames(event.target.value));
  }

  return (
    <ul>
      {filters.map((filter, index) => (
        <li key={index}>
          <Select
            name={filter.name}
            options={filter.options}
          />
        </li>
        )
      )}
    </ul>
  );
}

export default Filter;