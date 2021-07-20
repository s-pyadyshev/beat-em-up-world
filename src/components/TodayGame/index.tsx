import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { convertGameId } from "../../utils/utils";
import { ApplicationState } from "../../interfaces/ApplicationState";
import { GameCardInterface } from "../../interfaces/GameCard";
import "./style.scss";

const TodayGame: React.FC = () => {
  const isLoading = useSelector((state: any) => state.gamesList.loading);
  const gamesList = useSelector(
    (state: ApplicationState) => state.gamesList.gamesList
  );
  const [todayGameId, setTodayGameId] = useState("");
  const [todayGameCover, setTodayGameCover] = useState("");
  const [todayGameName, setTodayGameName] = useState("");

  const todayDate = new Date().toISOString().slice(5, 10);

  useEffect(() => {
    // TODO - api GET TODAY GAME ID
    // Refactor in case of Today games > 1

    const todayGameData = gamesList.filter(
      (game: GameCardInterface) =>
        gamesList && game.releasedate.slice(5, 10) === todayDate
    )[0];

    if (todayGameData !== undefined && !todayGameData.missing) {
      const todayGameId = convertGameId(
        todayGameData.name,
        todayGameData.platform
      );
      setTodayGameId(todayGameId);
      setTodayGameName(todayGameData.name);
      setTodayGameCover(todayGameData.cover);
    }
  }, [gamesList]);

  return (
    <>
      {isLoading ? (
        "Loading..."
      ) : (
        <div className="today-game">
          {todayGameName ? (
            <>
              <img src={todayGameCover} alt="today game cover" />
              <div className="today-game__info">
                On this day&nbsp; <br />
                <Link to={gamesList && todayGameId}>{todayGameName}</Link>
                <br />
                &nbsp;was released!
                <br />
                Try it now!
              </div>
            </>
          ) : (
            "Nothing was released on this day, come back the next day!"
          )}
        </div>
      )}
    </>
  );
};

export default TodayGame;
