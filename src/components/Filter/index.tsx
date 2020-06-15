import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Select from "../Select";
import Loading from "../Loading";
import Button from "../../ui/Button";
import {
  getFilters,
  showLessFilters,
  toggleFiltersAll,
} from "../../store/filters/actions";

import "./style.scss";
import store from "../../store";

const Filter = () => {
  const [visible, setVisibility] = useState(false);
  const loading = useSelector((state: any) => state.gamesList.loading);
  const filters = useSelector((state: any) => state.filters.filtersToggled);
  const basicView = useSelector((state: any) => state.filters.basicView);

  useEffect(() => {
    getFilters();
  }, []);

  const toggleFilter = () => {
    setVisibility(!visible);
  };

  const showMore = () => {
    store.dispatch(toggleFiltersAll());
  };

  const showLess = () => {
    store.dispatch(showLessFilters());
  };

  return (
    <div className={!visible ? "filter-wrap" : "filter-wrap is-active"}>
      <div className="filter-toggle">
        <button onClick={toggleFilter}>
          {!visible ? <span>Show filter</span> : <span>Hide filter</span>}
        </button>
      </div>

      <div className="filter">
        <ul className="filter-list">
          {loading ? <Loading /> : null}
          {filters &&
            filters.map((filter: any) => (
              <li key={filter.name}>
                <Select
                  filterName={filter.filterName}
                  name={filter.name}
                  description={filter.description}
                  options={filter.options}
                />
              </li>
            ))}
        </ul>

        {basicView ? (
          <Button onClick={showMore}>Show more filters</Button>
        ) : (
          <Button onClick={showLess}>Show less filters</Button>
        )}
      </div>
    </div>
  );
};

export default Filter;
