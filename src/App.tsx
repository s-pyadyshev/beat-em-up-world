import React, { useEffect } from "react";
import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import AboutPage from "./pages/AboutPage";
import LinksPage from "./pages/LinksPage";
import GameCard from "./components/GameCard";
import GameList from "./components/GameList";
import Filter from "./components/Filter";
import { Sprite } from "./components/Sprite";
import { Container, Row, Col, setConfiguration } from "react-grid-system";
import { getGamesRequest, getGamesSuccess } from "./store/gamesList/actions";
import { Games } from "./services/api";
import { useDispatch } from "react-redux";

setConfiguration({ containerWidths: [768, 960, 1140, 1400] });

const App: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGamesRequest());
    Games.get().then((data: any) => {
      dispatch(getGamesSuccess(data));
    });
  }, []);

  return (
    <Router>
      <div className="App">
        <Sprite />
        <Header />
        <div className="App__body">
          <Container style={{ width: "100%" }}>
            <Row>
              <Col md={3}>
                <Filter />
              </Col>
              <Col md={9}>
                <Switch>
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
