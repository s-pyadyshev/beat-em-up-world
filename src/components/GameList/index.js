import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { getGamesRequest } from "../../redux";

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
        <li
          key={index}>
            {game.name} <span>
              [{game.platform}]
            </span>
        </li>
        )
      )}
    </ul>
  );
}

export default GamesList;