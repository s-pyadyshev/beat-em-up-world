import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { convertGameId } from "../../utils/convertGameId";
import "./style.scss";

const TodayGame: React.SFC = () => {
  const gamesList = useSelector((state: any) => state.gamesList.gamesList);
  const [todayGameId, setTodayGameId] = useState("");
  const [todayGameName, setTodayGameName] = useState(false);

  useEffect(() => {
    // TODO - api GET TODAY GAME ID
    const todayDate =
      new Date().getDay().toString() +
      "." +
      new Date().getMonth() +
      "." +
      new Date().getFullYear();

    if (gamesList) {
      const getTodayGame = gamesList.filter(
        (game: any) => todayDate === game.releasedate
      )[0];

      if (getTodayGame !== undefined) {
        const todayGameId = convertGameId(
          getTodayGame.name,
          getTodayGame.platform
        );

        setTodayGameId(todayGameId);
        setTodayGameName(getTodayGame.name);
      }
    }
  }, [gamesList, todayGameName, todayGameId]);

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
      ) : null}
    </div>
  );
};

export default TodayGame;
