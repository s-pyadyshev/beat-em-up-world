import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { getGamesRequest } from "../../redux";
import GamesListItem from "../GameListItem";

const GamesList = () => {
  // const [games, setGames] = useState([]);
  // const gamesList = useSelector(state => state.gamesList.gamesList);
  const filteredGamesList = useSelector(state => state.gamesList.filteredGames);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("https://raw.githubusercontent.com/s-pyadyshev/beat-em-ups-api/master/db.json")
      .then(res => res.json())
      .then(result => {
        // setGames(result);
        dispatch(getGamesRequest(result));
      });
  }, [dispatch]);

  return (
    <ul>
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