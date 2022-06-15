import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import cn from "classnames";
import { convertGameId } from "../../utils/utils";
import { ApplicationState } from "../../interfaces/ApplicationState";
import { GameCardInterface } from "../../interfaces/GameCard";
import "./style.scss";

const TodayGame: React.FC = () => {
  const isLoading = useSelector((state: any) => state.gamesList.loading);
  const gamesList = useSelector(
    (state: ApplicationState) => state.gamesList.gamesList
  );
  const [todayGames, setTodayGames] = useState([]);

  const todayDate = new Date().toISOString().slice(5, 10);

  useEffect(() => {
    // TODO - make backend to get game by id
    const todayGamesData = gamesList
      .filter((game: GameCardInterface) => game.missing !== true)
      .filter(
        (game: GameCardInterface) =>
          gamesList && game.releasedate.slice(5, 10) === todayDate
      );
    setTodayGames(todayGamesData);
  }, [gamesList]);

  return (
    <>
      {isLoading ? (
        "Loading..."
      ) : (
        <div className="today-games-list">
          {todayGames.map((game: any) => (
            <Link
              key={convertGameId(game.name, game.platform)}
              className={cn({
                "today-game": true,
                active: game.name,
              })}
              to={convertGameId(game.name, game.platform)}
            >
              <img src={game.cover} alt="today game cover" />
              <div className="today-game__info">
                <div>On {game.releasedate}</div>
                <div className="today-game__name">
                  {game.name} [{game.platform}]
                </div>
                <div>was released</div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </>
  );
};

export default TodayGame;
