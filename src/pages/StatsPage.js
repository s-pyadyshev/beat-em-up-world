import React from 'react';
import { useSelector } from "react-redux";

const StatsPage = () => {
  const gamesList = useSelector(state => state.gamesList.gamesList);
  const gamesTotal = gamesList.length;

  return (
    <div className="stats">
      <h2>Statistics</h2>
      <h3>Games total: <span>{gamesTotal}</span></h3>
    </div>
  );
}

export default StatsPage;