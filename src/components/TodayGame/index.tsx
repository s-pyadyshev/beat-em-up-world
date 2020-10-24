import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { convertGameId } from "../../utils/convertGameId";
import { ApplicationState } from "../../interfaces/ApplicationState";
import { GameCardInterface } from "../../interfaces/GameCard";
import "./style.scss";

const TodayGame: React.FC = () => {
  const gamesList = useSelector(
    (state: ApplicationState) => state.gamesList.gamesList
  );
  const [todayGameId, setTodayGameId] = useState("");
  const [todayGameName, setTodayGameName] = useState(false);

  const todayDate =
    new Date().getUTCDate().toString() + "." + (new Date().getUTCMonth() + 1);

  useEffect(() => {
    // TODO - api GET TODAY GAME ID
    // Refactor in case of Today games > 1

    const todayGameData = gamesList.filter(
      (game: GameCardInterface) => game.releasedate === todayDate
    )[0];

    if (todayGameData !== undefined) {
      const todayGameId = convertGameId(
        todayGameData.name,
        todayGameData.platform
      );
      setTodayGameId(todayGameId);
      setTodayGameName(todayGameData.name);
    }
  }, [gamesList]);

  return (
    <div className="today-game">
      {todayGameName ? (
        <>
          <span>
            On this day&nbsp;
            <Link to={gamesList && todayGameId}>{todayGameName}</Link>
            &nbsp;was released!
          </span>
          &nbsp;Try it now!
        </>
      ) : (
        "Nothing was released on this day, come back the next day!"
      )}
    </div>
  );
};

export default TodayGame;
