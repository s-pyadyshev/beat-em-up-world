import React from "react";
import { useSelector } from "react-redux";
import GamesListItem from "../GameListItem";
import Loading from "../Loading";
import { ApplicationState } from "../../interfaces/ApplicationState";
import { GameCardInterface } from "../../interfaces/GameCard";
import "./style.scss";

const GamesList = () => {
  const filteredGamesList = useSelector(
    (state: ApplicationState) => state.gamesList.filteredGames
  );
  const loading = useSelector(
    (state: ApplicationState) => state.gamesList.loading
  );

  return (
    <ul className="gameslist">
      {loading ? <Loading /> : null}
      {filteredGamesList && filteredGamesList.length === 0 ? (
        <h2>Games not found</h2>
      ) : null}

      {filteredGamesList &&
        filteredGamesList.map((game: GameCardInterface) => (
          <React.Fragment key={game.name + game.platform}>
            {game.missing ? (
              <li className="missing">
                <b>
                  {game.name} [{game.platform}] (MISSING -{" "}
                  <a href="https://github.com/s-pyadyshev/beat-em-ups-api/blob/master/db.json">
                    ADD THE GAME HERE
                  </a>
                  )
                </b>
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
