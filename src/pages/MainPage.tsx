import React from "react";
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

const filtersVisibleSelector = createSelector(
  selectFilters,
  (filters) => filters.isVisible
);

export const MainPage = () => {
  const isFiltersVisible = useSelector(filtersVisibleSelector);

  const handleToggleFilter = () => {
    store.dispatch(toggleFilter(!isFiltersVisible));
  };

  return (
    <>
      <Row>
        <Col md={12} xl={6}>
          <ErrorBoundary>
            <Search />
            <div className="filter-toggle">
              <button onClick={handleToggleFilter} className="button">
                {!isFiltersVisible ? (
                  <span>Show filter</span>
                ) : (
                  <span>Hide filter</span>
                )}
              </button>
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
