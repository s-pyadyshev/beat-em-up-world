import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Select from "../Select";
import Loading from "../Loading";
import { Filters } from "../../services/api";
import "./style.scss";

const Filter = () => {
  const [filters, setFilters] = useState([]);
  const [visible, setVisibility] = useState(false);
  const loading = useSelector((state: any) => state.gamesList.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    Filters.get().then((result) => {
      setFilters(result);
    });
  }, [dispatch]);

  const toggleFilter = () => {
    setVisibility(!visible);
  };

  return (
    <div className={!visible ? "filter-wrap" : "filter-wrap is-active"}>
      <button onClick={toggleFilter} className="filter-toggle">
        {!visible ? <span>Show filter</span> : <span>Hide filter</span>}
      </button>
      <ul className="filter">
        {loading ? <Loading /> : null}
        {filters.map((filter: any) => (
          <li key={filter}>
            <Select
              filterName={filter.filterName}
              name={filter.name}
              description={filter.description}
              options={filter.options}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Filter;
