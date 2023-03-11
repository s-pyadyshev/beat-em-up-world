import React, { useEffect, Suspense, lazy } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import AnniversaryNote from "./components/AnniversaryNote";
import ErrorBoundary from "./components/ErrorBoundary";
import Header from "./components/Header";
import ChartsPage from "./pages/ChartsPage";
import GameCard from "./components/GameCard";
import GameList from "./components/GameList";
import Filter from "./components/Filter";
import Stats from "./components/Stats";
import TodayGame from "./components/TodayGame";
import Search from "./components/Search";
import AlphabetSorter from "./components/AlphabetSorter";
import { Container, Row, Col, setConfiguration } from "react-grid-system";
import { getGames } from "./store/gamesList/actions";
import { toggleFilter } from "./store/filters/actions";
import store from "./store";
import "./App.scss";
import BrawlersAlleyLogo from "../src/assets/img/logo-brawlers-alley.png";

setConfiguration({
  containerWidths: [640, 768, 960, 1024, 1200, 1920],
});

const About = lazy(() => import("./pages/AboutPage"));
const Links = lazy(() => import("./pages/LinksPage"));
const SecretPage = lazy(() => import("./pages/SecretPage"));

interface filtersInterface {
  filters: {
    isVisible: boolean;
  };
}

const Main = () => {
  const isFiltersVisible = useSelector(
    (state: filtersInterface) => state.filters.isVisible
  );
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
      <div style={{ marginBottom: 24 }}>
        <b style={{ color: "yellow" }}>Yellow color</b> - a game with partial
        beat'em up gameplay. Good choice to vary face punching routine.
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

const App: React.FC = () => {
  const isFiltersVisible = useSelector(
    (state: filtersInterface) => state.filters.isVisible
  );
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
          <Row>
            {isFiltersVisible ? (
              <Col md={4} lg={3}>
                <ErrorBoundary>
                  <Filter />
                </ErrorBoundary>
              </Col>
            ) : null}
            <Col md={isFiltersVisible ? 8 : 12} lg={isFiltersVisible ? 9 : 12}>
              <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                  <Route path="/" element={<Main />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/charts" element={<ChartsPage />} />
                  <Route path="/links" element={<Links />} />
                  <Route path="/secret" element={<SecretPage />} />
                  <Route path="/:id" element={<GameCard />} />
                  {/* TODO 404 along with dynamic id pages */}
                  {/* <Route path="*">ERROR 404</Route> */}
                </Routes>
              </Suspense>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default App;
