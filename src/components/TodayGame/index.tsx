import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import cn from "classnames";
import { convertGameId } from "../../utils/utils";
import { IApplicationState } from "../../interfaces/ApplicationState";
import { GameCardType } from "../../types/GameCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "./style.scss";

const TodayGame: React.FC = () => {
  const isLoading = useSelector(
    (state: IApplicationState) => state.gamesList.loading
  );
  const gamesList = useSelector(
    (state: IApplicationState) => state.gamesList.gamesList
  );
  const [todayGames, setTodayGames] = useState([]);

  const todayDate = new Date().toISOString().slice(5, 10);

  useEffect(() => {
    // TODO - make backend to get game by id
    const todayGamesData = gamesList
      .filter((game: GameCardType) => game.missing !== true)
      .filter(
        (game: GameCardType) =>
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
          <Swiper modules={[Navigation]} navigation>
            {todayGames.map((game: any) => (
              <SwiperSlide key={convertGameId(game.name, game.platform)}>
                <Link
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
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </>
  );
};

export default TodayGame;
