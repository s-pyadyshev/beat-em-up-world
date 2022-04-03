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
  const [todayGameId, setTodayGameId] = useState("");
  const [todayGamePlatform, setTodayGamePlatform] = useState({});
  const [todayGameCover, setTodayGameCover] = useState("");
  const [todayGameName, setTodayGameName] = useState(false);
  const [todayGameDate, setTodayGameDate] = useState("");

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
      setTodayGamePlatform(todayGameData.platform);
      setTodayGameId(todayGameId);
      setTodayGameName(todayGameData.name);
      setTodayGameCover(todayGameData.cover);
    }

    const todayMonthDay: string = new Date().toLocaleString("en-us", {
      month: "long",
      day: "numeric",
    });

    setTodayGameDate(todayMonthDay);
  }, [gamesList]);

  return (
    <>
      {isLoading ? (
        "Loading..."
      ) : (
        <>
          {todayGameName ? (
            <Link
              className={cn({
                "today-game": true,
                active: todayGameName,
              })}
              to={gamesList && todayGameId}
            >
              <img src={todayGameCover} alt="today game cover" />
              <div className="today-game__info">
                <div>On {todayGameDate}</div>
                <div className="today-game__name">
                  {todayGameName} [{todayGamePlatform}]
                </div>
                <div>was released</div>
              </div>
            </Link>
          ) : null}
        </>
      )}
    </>
  );
};

export default TodayGame;
