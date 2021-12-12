import React from "react";
import { useSelector } from "react-redux";
import { GameCardInterface } from "../../interfaces/GameCard";
import { ApplicationState } from "../../interfaces/ApplicationState";
import "./style.scss";

const Stats: React.FC = () => {
  const isLoading = useSelector((state: any) => state.gamesList.loading);

  const total = useSelector(
    (state: ApplicationState) => state.gamesList.gamesList.length
  );

  // TODO add specific param to DB to calculate unique titles only

  const missing = useSelector(
    (state: ApplicationState) =>
      state.gamesList.gamesList.filter(
        (game: GameCardInterface) => game.missing === true
      ).length
  );
  const found = useSelector(
    (state: ApplicationState) => state.gamesList.filteredGames.length
  );

  const currentProgress = 100 - Math.floor(missing / (total / 100));

  return (
    <>
      {isLoading ? (
        "Loading..."
      ) : (
        <div className="stats">
          <div className="stats__progress">
            <progress max="100" value={currentProgress ? currentProgress : 0} />
            <span>{currentProgress}% complete</span>
          </div>
          <div className="stats__item">
            <span className="stats__key">Total:</span>&nbsp;
            <span className="stats__value state-info-color">{total}</span>
          </div>
          <div className="stats__item">
            <span className="stats__key">Missing:</span>&nbsp;
            <span className="stats__value state-error-color">{missing}</span>
          </div>
          <div className="stats__item">
            <span className="stats__key">Found:</span>&nbsp;
            <span className="stats__value state-active-color">{found}</span>
          </div>
        </div>
      )}
    </>
  );
};

export default Stats;
