import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Select from "../Select";
import Loading from "../Loading";
import { Filters } from "../../services/api";
import "./style.scss";

const Filter = () => {
  const [filters, setFilters] = useState([]);
  const [fullFilters, setFullFilters] = useState([]);
  const [visible, setVisibility] = useState(false);
  const loading = useSelector((state: any) => state.gamesList.loading);
  const dispatch = useDispatch();
  const basicFilters = [
    "platform",
    "perspective",
    "series",
    "players",
    "releaseYear",
    "structure",
    "difficulty",
    "variety",
    "grabs",
    "groundHit",
    "artStyle",
    "setting",
    "focus",
    "music",
    "gore",
    "fighters",
    "weapons",
  ];

  useEffect(() => {
    Filters.get().then((result) => {
      setFullFilters(result);
      const basicFilterList = result.filter((item: any) =>
        basicFilters.includes(item.name)
      );
      setFilters(basicFilterList);
    });
  }, [dispatch]);

  const toggleFilter = () => {
    setVisibility(!visible);
  };

  const showMore = () => {
    setFilters(fullFilters);
  };

  return (
    <div className={!visible ? "filter-wrap" : "filter-wrap is-active"}>
      <button onClick={toggleFilter} className="filter-toggle">
        {!visible ? <span>Show filter</span> : <span>Hide filter</span>}
      </button>
      <ul className="filter">
        {loading ? <Loading /> : null}
        {filters.map((filter: any) => (
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
      <button onClick={showMore}>
        <span>Show more filters</span>
      </button>
    </div>
  );
};

export default Filter;
