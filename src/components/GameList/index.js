import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getGamesRequest, getGamesSuccess } from '../../redux/gamesList/actions';
import GamesListItem from '../GameListItem';
import { Games } from '../../services/api';
import Loading from '../Loading';
import './style.scss';

const GamesList = () => {
  const filteredGamesList = useSelector((state) => state.gamesList.filteredGames);
  const loading = useSelector((state) => state.gamesList.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGamesRequest());
    Games.get()
      .then((data) => dispatch(getGamesSuccess(data)));
  }, [dispatch]);

  return (
    <ul className="gameslist">
      {loading ? <Loading /> : null}
      {filteredGamesList && filteredGamesList.length === 0 ? <h2>Games not found</h2> : null}
      {filteredGamesList && filteredGamesList.map((game) => (
        <>
          {game.missing
            ? (
              <li className="missing">
                <b>
                  {game.name}
                  {' '}
                  [
                  {game.platform}
                  ] (MISSING -
                  {' '}
                  <a href="https://github.com/s-pyadyshev/beat-em-ups-api/blob/master/db.json">ADD THE GAME HERE</a>
                  )
                </b>
              </li>
            )
            : (
              <GamesListItem
                name={game.name}
                platform={game.platform}
              />
            )}
        </>
      ))}
    </ul>
  );
};

export default GamesList;
