import React from 'react';
import './App.css';
import GameList from "./components/GameList";
import Select from "./components/Select";

function App() {
  return (
    <div className="App">
      <Select/>
      <GameList/>
    </div>
  );
}

export default App;
