import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Select from "../Select";
import Loading from "../Loading";
import "./style.scss";

const Filter = () => {
  const [filters, setFilters] = useState([]);
  const loading = useSelector((state: any) => state.gamesList.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/s-pyadyshev/beat-em-ups-api/master/filter.json"
    )
      .then((res) => res.json())
      .then((result) => {
        setFilters(result);
      });
  }, [dispatch]);

  return (
    <ul className="filter">
      {loading ? <Loading /> : null}
      {filters.map((filter: any, index: any) => (
        <li key={index}>
          <Select
            filterName={filter.filterName}
            name={filter.name}
            description={filter.description}
            options={filter.options}
          />
        </li>
      ))}
    </ul>
  );
};

export default Filter;
