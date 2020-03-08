import React from 'react';
import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AboutPage from "./pages/AboutPage";

import GameCard from "./components/GameCard";
import GameList from "./components/GameList";
import Filter from "./components/Filter";

function App() {
  return (
    <Router>
      <Link to="/about">About</Link>
      <div className="App">
        <Filter/>
        <GameList/>
        <Switch>
          <Route path="/about">
            <AboutPage />
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
