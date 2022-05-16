import React, { useEffect, Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
            <a
              style={{
                display: "inline-block",
                marginTop: 32,
                padding: "4px 16px",
                backgroundColor: "rgb(255, 66, 77)",
                borderRadius: 10,
                color: "#fff",
                textDecoration: "none",
              }}
              href="https://www.patreon.com/bePatron?u=58353569"
              data-patreon-widget-type="become-patron-button"
              target="_blank"
              rel="noopener noreferrer"
            >
              Become a Patron
            </a>
            <script
              async
              src="https://c6.patreon.com/becomePatronButton.bundle.js"
            ></script>
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
              <Col md={4} lg={3}>
                <ErrorBoundary>
                  <Filter />
                </ErrorBoundary>
              </Col>
              <Col md={8} lg={9}>
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
