import React, { useEffect, Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { Helmet } from "react-helmet";
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
import "./App.scss";

setConfiguration({ containerWidths: [768, 960, 1140, 1400] });

const About = lazy(() => import("./pages/AboutPage"));
// const Charts = lazy(() => import("./pages/ChartsPage"));
const Links = lazy(() => import("./pages/LinksPage"));
const SecretPage = lazy(() => import("./pages/SecretPage"));

const Main = () => {
  return (
    <>
      <Row>
        <Col md={6} lg={5}>
          <ErrorBoundary>
            <Search />
            <Stats />
          </ErrorBoundary>
        </Col>
        <Col md={6} lg={7}>
          <ErrorBoundary>
            <TodayGame />
          </ErrorBoundary>
        </Col>
      </Row>
      <AlphabetSorter />
      <div style={{ marginBottom: 24 }}>
        <b style={{ color: "yellow" }}>Yellow color</b> - a game with partial
        beat'em up gameplay. Good choice to vary face punching routine.
      </div>
      <GameList />
    </>
  );
};

const App: React.FC = () => {
  const isFiltersVisible = useSelector((state: any) => state.filters.isVisible);

  useEffect(() => {
    getGames();
  }, []);

  return (
    <Router>
      <div className="app">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Beat'em Up World</title>
          <link
            rel="icon"
            type="image/png"
            href="favicon1-16x16"
            sizes="16x16"
          />
        </Helmet>
        <Header />
        <div className="app__body">
          <Container style={{ width: "100%" }}>
            <Row>
              {isFiltersVisible ? (
                <Col md={4} lg={3}>
                  <ErrorBoundary>
                    <Filter />
                  </ErrorBoundary>
                </Col>
              ) : null}
              <Col
                md={isFiltersVisible ? 8 : 12}
                lg={isFiltersVisible ? 9 : 12}
              >
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
    </Router>
  );
};

export default App;
