import React from 'react';
import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from "./components/Header";
import AboutPage from "./pages/AboutPage";
import StatsPage from "./pages/StatsPage";
import GameCard from "./components/GameCard";
import GameList from "./components/GameList";
import Filter from "./components/Filter";

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <div className="App__body">
          <Filter/>
          <GameList/>
          <Switch>
            <Route path="/about">
              <AboutPage />
            </Route>
            <Route path="/stats">
              <StatsPage />
            </Route>
            <Route path="/:id"
            children={
              <div className="App__card"><GameCard /></div>
            }/>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
