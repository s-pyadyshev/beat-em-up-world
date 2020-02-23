import React, { useState, useEffect } from 'react';
import { useDispatch } from "react-redux";
import apiService from "../../apiService";
import { getGamesRequest } from "../../redux";

const GamesList = () => {
  const [games, setGames] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("https://raw.githubusercontent.com/s-pyadyshev/beat-em-ups-api/master/db.json")
      .then(res => res.json())
      .then(result => {
        setGames(result);
        dispatch(getGamesRequest(result));
      });
  }, [dispatch]);

  return (
    <ul>
      {games.map((game, index) => <li key={index}>{game.name} <span>[{game.platform}]</span></li>)}
    </ul>
  );
}

export default GamesList;