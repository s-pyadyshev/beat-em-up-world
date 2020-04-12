import React from 'react';
import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Header from './components/Header';
import AboutPage from './pages/AboutPage';
import LinksPage from './pages/LinksPage';
import GameCard from './components/GameCard';
import GameList from './components/GameList';
import Filter from './components/Filter';
import Sprite from './components/Sprite';

function App() {
  return (
    <Router>
      <div className="App">
        <Sprite />
        <Header />
        <div className="App__body">
          <Filter />
          <GameList />
          <Switch>
            <Route path="/about">
              <AboutPage />
            </Route>
            <Route path="/links">
              <LinksPage />
            </Route>
            <Route path="/:id">
              <div className="App__card"><GameCard /></div>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
