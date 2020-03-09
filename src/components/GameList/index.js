import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { getGamesRequest } from "../../redux/gamesList/actions";
import GamesListItem from "../GameListItem";

const GamesList = () => {
  const filteredGamesList = useSelector(state => state.gamesList.filteredGames);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("https://raw.githubusercontent.com/s-pyadyshev/beat-em-ups-api/master/db.json")
      .then(res => res.json())
      .then(result => {
        dispatch(getGamesRequest(result));
      });
  }, [dispatch]);

  return (
    <ul>
      {filteredGamesList && filteredGamesList.length === 0 ? <h2>Games not found</h2> : null}
      {filteredGamesList && filteredGamesList.map((game, index) => (
        <GamesListItem
          key={index}
          name={game.name}
          platform={game.platform}>
        </GamesListItem>
        )
      )}
    </ul>
  );
}

export default GamesList;