import React from 'react';
import './App.css';
import GameList from "./components/GameList";
import Filter from "./components/Filter";

function App() {
  return (
    <div className="App">
      <Filter/>
      <GameList/>
    </div>
  );
}

export default App;
