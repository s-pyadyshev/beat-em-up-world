import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./style.scss";

const TodayGame: React.SFC = () => {
  const gamesList = useSelector((state: any) => state.gamesList.gamesList);
  const [todayGameId, setTodayGameId] = useState({});

  const todayDate = () =>
    new Date().getDay().toString() +
    "." +
    new Date().getMonth() +
    "." +
    new Date().getFullYear();

  const todayGameName =
    gamesList &&
    gamesList.filter((game: any) => "13.09.2005" === game.releasedate)[0].name;

  useEffect(() => {
    // TODO - api GET TODAY GAME ID
    console.log(todayDate());
    const getTodayGame =
      gamesList &&
      gamesList.filter((game: any) => "13.09.2005" === game.releasedate)[0];
    // TODO - utils function
    const todayGameId = `${gamesList && getTodayGame.name}-${
      gamesList && getTodayGame.platform
    }`
      .replace(/[\s:&'.!?]/g, "")
      .toLowerCase();
    setTodayGameId(todayGameId);
  }, [gamesList]);

  return (
    <div className="today-game">
      {todayGameName ? (
        <>
          <span>
            On this day&nbsp;
            <Link to={gamesList && todayGameId}>xxx</Link>
            &nbsp;was released!
          </span>
          &nbsp;Try it now!
        </>
      ) : null}
    </div>
  );
};

export default TodayGame;
