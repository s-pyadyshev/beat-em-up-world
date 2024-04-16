import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { createSelector } from "reselect";
import ErrorBoundary from "./components/ErrorBoundary";
import Header from "./components/Header";
import Filter from "./components/Filter";
import { Container, Row, Col, setConfiguration } from "react-grid-system";
import { getGames } from "./store/gamesList/actions";
import store from "./store";
import { inject } from "@vercel/analytics";
import { AppRouter } from "./providers/router/ui/AppRouter";
import { selectFilters } from "./selectors";
import { toggleFilter } from "./store/filters/actions";
import "./App.scss";

inject();

setConfiguration({
  containerWidths: [640, 768, 960, 1024, 1200, 1920],
});

const filtersVisibleSelector = createSelector(
  selectFilters,
  (filters) => filters?.isVisible
);

const AppContent = () => {
  const isFiltersVisible = useSelector(filtersVisibleSelector);

  return (
    <Row>
      {isFiltersVisible ? (
        <Col md={4} lg={3}>
          <ErrorBoundary>
            <Filter />
          </ErrorBoundary>
        </Col>
      ) : null}
      <Col md={isFiltersVisible ? 8 : 12} lg={isFiltersVisible ? 9 : 12}>
        <AppRouter />
      </Col>
    </Row>
  );
};

const App: React.FC = () => {
  const location = useLocation().pathname;

  useEffect(() => {
    getGames();
  }, []);

  useEffect(() => {
    if (location === "/charts") {
      store.dispatch(toggleFilter(false));
    }
  }, [location]);

  return (
    <div className="app">
      <Header />
      <div className="app__body">
        <Container style={{ width: "100%" }} fluid={location === "/charts"}>
          <AppContent />
        </Container>
      </div>
    </div>
  );
};

export default App;
