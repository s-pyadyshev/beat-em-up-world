import React, { useEffect, Suspense, lazy } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Helmet } from "react-helmet";
import ErrorBoundary from "./components/ErrorBoundary";
import Header from "./components/Header";
// import AboutPage from "./pages/AboutPage";
// import AuthPage from "./pages/AuthPage";
// import LinksPage from "./pages/LinksPage";
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
const Links = lazy(() => import("./pages/LinksPage"));
const SecretPage = lazy(() => import("./pages/SecretPage"));

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
                  <Switch>
                    <Route exact path="/">
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
                      <GameList />
                    </Route>
                    {/* <Route path="/auth">
                      <AuthPage />
                    </Route> */}
                    <Route path="/about">
                      <About />
                    </Route>
                    <Route path="/links">
                      <Links />
                    </Route>
                    <Route path="/secret">
                      <SecretPage />
                    </Route>
                    <Route exact path="/:id">
                      <div>
                        <GameCard />
                      </div>
                    </Route>
                    {/* TODO 404 along with dynamic id pages */}
                    {/* <Route path="*">ERROR 404</Route> */}
                  </Switch>
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
