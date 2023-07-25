import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Select from "../Select";
import Loading from "../Loading";
import Button from "../Button";
import {
  getFilters,
  showLessFilters,
  toggleFiltersAll,
} from "../../store/filters/actions";
import {
  filterByOptions,
  resetFilter,
  toggleSaveFilters,
} from "../../store/gamesList/actions";
import { ApplicationState } from "../../interfaces/ApplicationState";
import { FilterInterface } from "../../interfaces/Filter";

// import { Scrollbars } from "react-custom-scrollbars-2";

import "./style.scss";
import store from "../../store";

const Filter = () => {
  const loading = useSelector(
    (state: ApplicationState) => state.gamesList.loading
  );

  const filters = useSelector(
    (state: ApplicationState) => state.filters.filtersToggled
  );
  const filterOptions = useSelector(
    (state: ApplicationState) => state.gamesList.filterOptions
  );
  const basicView = useSelector(
    (state: ApplicationState) => state.filters.basicView
  );
  const isFiltered = useSelector(
    (state: ApplicationState) => state.gamesList.isFiltered
  );
  const gamesList = useSelector(
    (state: ApplicationState) => state.gamesList.gamesList
  );
  const saveFilters = useSelector(
    (state: ApplicationState) => state.gamesList.saveFilters
  );

  useEffect(() => {
    getFilters();
  }, []);

  useEffect(() => {
    const filterOptionsLS: string | null =
      localStorage.getItem("filterOptions");
    console.log(typeof filterOptionsLS);

    if (filterOptionsLS && gamesList.length) {
      store.dispatch(filterByOptions(JSON.parse(filterOptionsLS)));
      store.dispatch(toggleSaveFilters());
    }
  }, [gamesList]);

  const showMore = () => {
    store.dispatch(toggleFiltersAll());
  };

  const showLess = () => {
    store.dispatch(showLessFilters());
  };

  const onResetFilter = () => {
    store.dispatch(resetFilter());
  };

  const handleSaveFilters = () => {
    store.dispatch(toggleSaveFilters());
    if (saveFilters) {
      localStorage.removeItem("filterOptions");
      return;
    }
    localStorage.setItem("filterOptions", JSON.stringify(filterOptions));
  };

  return (
    <div className="filter-wrap">
      {/* <div className="filter-toggle">
        <button onClick={toggleFilter}>
          {!visible ? <span>Show filter</span> : <span>Hide filter</span>}
        </button>
      </div> */}
      <div className="filter">
        <ul className="filter-list">
          {loading ? <Loading /> : null}
          {filters &&
            filters.map((filter: FilterInterface) => (
              <li key={filter.name}>
                <Select
                  savedOption={
                    filterOptions &&
                    (Array.isArray(filterOptions[filter.name])
                      ? filterOptions[filter.name][0]
                      : filterOptions[filter.name])
                  }
                  filterName={filter.filterName}
                  name={filter.name}
                  description={filter.description}
                  options={filter.options}
                />
              </li>
            ))}
        </ul>

        {basicView ? (
          <div className="filter__show-more-btn">
            <Button onClick={showMore}>Show more filters</Button>
          </div>
        ) : (
          <div className="filter__show-more-btn">
            <Button onClick={showLess}>Show less filters</Button>
          </div>
        )}
        {isFiltered ? <Button onClick={onResetFilter}>Reset</Button> : null}
        {filterOptions ? (
          <label className="button-save">
            <input
              type="checkbox"
              onChange={handleSaveFilters}
              checked={saveFilters}
            />
            Save filter
          </label>
        ) : null}
      </div>
    </div>
  );
};

export default Filter;
