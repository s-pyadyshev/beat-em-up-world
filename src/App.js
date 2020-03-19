import React from 'react';
import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import StatsPage from "./pages/StatsPage";
import GameCard from "./components/GameCard";
import GameList from "./components/GameList";
import Filter from "./components/Filter";

function App() {
  return (
    <Router>
      <Link to="/about">About</Link>
      <br/>
      <Link to="/stats">Stats</Link>
      <div className="App">
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
    </Router>
  );
}

export default App;
