import React from "react";
import { useSelector } from "react-redux";
import GamesListItem from "../GameListItem";
import Loading from "../Loading";
import { IApplicationState } from "../../interfaces/ApplicationState";
import { GameCardType } from "../../types/GameCard";
import "./style.scss";

const GamesList = () => {
  const filteredGamesList = useSelector(
    (state: IApplicationState) => state.gamesList.filteredGames
  );
  const loading = useSelector(
    (state: IApplicationState) => state.gamesList.loading
  );

  return (
    <ul className="gameslist">
      {loading ? <Loading /> : null}
      {!loading && filteredGamesList && filteredGamesList.length === 0 ? (
        <p>Games not found</p>
      ) : null}

      {filteredGamesList &&
        filteredGamesList.map((game: GameCardType) => (
          <React.Fragment key={game.name + game.platform}>
            {game.missing ? (
              <li className="missing">
                {game.name} [{game.platform}]
              </li>
            ) : (
              <GamesListItem
                name={game.name}
                platform={game.platform}
                multigenre={game.multigenre}
              />
            )}
          </React.Fragment>
        ))}
    </ul>
  );
};

export default GamesList;
