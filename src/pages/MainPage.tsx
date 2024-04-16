import { useSelector } from "react-redux";
import BrawlersAlleyLogo from "../../src/assets/img/logo-brawlers-alley.png";
import { createSelector } from "reselect";
import { selectFilters } from "../selectors";
import store from "../store";
import { toggleFilter } from "../store/filters/actions";
import { Row, Col } from "react-grid-system";
import ErrorBoundary from "../components/ErrorBoundary";
import Stats from "../components/Stats";
import TodayGame from "../components/TodayGame";
import Search from "../components/Search";
import AlphabetSorter from "../components/AlphabetSorter";
import AnniversaryNote from "../components/AnniversaryNote";
import GameList from "../components/GameList";
import { showLessFilters, toggleFiltersAll } from "../store/filters/actions";
import { IApplicationState } from "../interfaces";
import Button from "../components/Button";
import {
  resetFilter,
  toggleSaveFilters } from "../store/gamesList/actions";

const filtersVisibleSelector = createSelector(
  selectFilters,
  (filters) => filters?.isVisible
);

export const MainPage = () => {
  const isFiltersVisible = useSelector(filtersVisibleSelector);
  const isFiltered = useSelector(
    (state: IApplicationState) => state.gamesList.isFiltered
  );
  const filterOptions = useSelector(
    (state: IApplicationState) => state.gamesList.filterOptions
  );
  const basicView = useSelector(
    (state: IApplicationState) => state.filters.basicView
  );

  const handleToggleFilter = () => {
    store.dispatch(toggleFilter(!isFiltersVisible));
  };

  const showMore = () => {
    store.dispatch(toggleFiltersAll());
  };

  const showLess = () => {
    store.dispatch(showLessFilters());
  };

  const onResetFilter = () => {
    store.dispatch(resetFilter());
  };

  const saveFilters = useSelector(
    (state: IApplicationState) => state.gamesList.saveFilters
  );

  const handleSaveFilters = () => {
    store.dispatch(toggleSaveFilters());
    if (saveFilters) {
      localStorage.removeItem("filterOptions");
      return;
    }
    localStorage.setItem("filterOptions", JSON.stringify(filterOptions));
  };

  return (
    <>
      <Row>
        <Col md={12} xl={6}>
          <ErrorBoundary>
            <Search />
            <div className="filter-toggle">
              <Button onClick={handleToggleFilter}>
                {!isFiltersVisible ? (
                  <span>Show filter</span>
                ) : (
                  <span>Hide filter</span>
                )}
              </Button>
              {isFiltersVisible ? (
                <div>{basicView ? (
                  <Button onClick={showMore}>Show more filters</Button>
                ) : (
                  <Button onClick={showLess}>Show less filters</Button>
                )}</div>)
                : null}

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
            <AnniversaryNote />
          </ErrorBoundary>
        </Col>
        <Col md={6} xl={3}>
          <ErrorBoundary>
            <TodayGame />
          </ErrorBoundary>
        </Col>
        <Col md={6} xl={3}>
          <a
            className="brawlers-alley-link"
            href="https://www.brawlersalley.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={BrawlersAlleyLogo} alt="Brawler's Alley Logo." />
            <p>
              The First Ever Beat'Em Up Magazine, bringing you the latest news,
              previews and reviews of this old timer genre
            </p>
          </a>
        </Col>
      </Row>
      <AlphabetSorter />
      <div
        style={{
          marginBottom: 24,
          fontFamily: "capture-it",
        }}
      >
        <b style={{ color: "yellow" }}>Yellow color</b> - a game with partial
        Beat'em up gameplay. Good choice to vary face punching routine.
      </div>
      <GameList />
      <Row style={{ marginTop: 64 }}>
        <Col md={4} offset={{ md: 4 }}>
          <Stats />
        </Col>
      </Row>
    </>
  );
};
