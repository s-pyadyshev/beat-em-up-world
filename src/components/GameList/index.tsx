import React from "react";
import { useSelector } from "react-redux";
import GamesListItem from "../GameListItem";
import Loading from "../Loading";
import "./style.scss";

const GamesList = () => {
  const filteredGamesList = useSelector(
    (state: any) => state.gamesList.filteredGames
  );
  const loading = useSelector((state: any) => state.gamesList.loading);

  try {
    return (
      <ul className="gameslist">
        {loading ? <Loading /> : null}
        {filteredGamesList && filteredGamesList.length === 0 ? (
          <h2>Games not found</h2>
        ) : null}
        {filteredGamesList &&
          filteredGamesList.map((game: any, index: any) => (
            <React.Fragment key={index}>
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
                <GamesListItem name={game.name} platform={game.platform} />
              )}
            </React.Fragment>
          ))}
      </ul>
    );
  } catch (error) {
    return <div>Error</div>;
  }
};

export default GamesList;
