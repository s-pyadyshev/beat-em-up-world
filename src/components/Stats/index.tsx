import React from "react";
import { useSelector } from "react-redux";
import { GameCardInterface } from "../../interfaces/GameCard";
import { ApplicationState } from "../../interfaces/ApplicationState";
import "./style.scss";

const Stats: React.SFC = () => {
  const total = useSelector(
    (state: ApplicationState) =>
      state.gamesList.gamesList && state.gamesList.gamesList.length
  );
  const missing = useSelector(
    (state: ApplicationState) =>
      state.gamesList.gamesList &&
      state.gamesList.gamesList.filter(
        (game: GameCardInterface) => game.missing === true
      ).length
  );
  const found = useSelector(
    (state: ApplicationState) =>
      state.gamesList.gamesList && state.gamesList.filteredGames.length
  );

  return (
    <div>
      <div>
        <b>Total:</b> {total}
      </div>
      <div>
        <b>Missing:</b> {missing}
      </div>
      <div>
        <b>Found:</b> {found}
      </div>
      <br />
    </div>
  );
};

export default Stats;
