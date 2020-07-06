import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ErrorBoundary from "./components/ErrorBoundary";
import Header from "./components/Header";
import AboutPage from "./pages/AboutPage";
import AuthPage from "./pages/AuthPage";
import LinksPage from "./pages/LinksPage";
import GameCard from "./components/GameCard";
import GameList from "./components/GameList";
import Filter from "./components/Filter";
import Stats from "./components/Stats";
import TodayGame from "./components/TodayGame";
import Search from "./components/Search";
import { Container, Row, Col, setConfiguration } from "react-grid-system";
import { getGames } from "./store/gamesList/actions";
import "./App.scss";

setConfiguration({ containerWidths: [768, 960, 1140, 1400] });

const App: React.FC = () => {
  useEffect(() => {
    getGames();
  }, []);

  return (
    <Router>
      <div className="app">
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
                <Switch>
                  <Route path="/auth">
                    <AuthPage />
                  </Route>
                  <Route path="/about">
                    <AboutPage />
                  </Route>
                  <Route path="/links">
                    <LinksPage />
                  </Route>
                  <Route path="/:id">
                    <div>
                      <GameCard />
                    </div>
                  </Route>
                  <Route path="/">
                    <Row>
                      <Col md={4} lg={5}>
                        <ErrorBoundary>
                          <Search />
                          <Stats />
                        </ErrorBoundary>
                      </Col>
                      <Col md={4} lg={7}>
                        <ErrorBoundary>
                          <TodayGame />
                        </ErrorBoundary>
                      </Col>
                    </Row>
                    <GameList />
                  </Route>
                </Switch>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </Router>
  );
};

export default App;
