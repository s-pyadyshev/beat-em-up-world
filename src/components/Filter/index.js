import React, { useEffect, useState } from 'react';
import { useDispatch } from "react-redux";
import Select from "../Select";
import "./style.scss";

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

  return (
    <ul className="filter">
      {filters.filter((filter) => filter.name !== "otherPlatforms").map((filter, index) => (
        <li key={index}>
          <Select
            filterName={filter.filterName}
            name={filter.name}
            description={filter.description}
            options={filter.options}
          />
        </li>
        )
      )}
    </ul>
  );
}

export default Filter;