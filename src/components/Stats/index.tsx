import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { GameCardInterface } from "../../interfaces/GameCard";
import "./style.scss";

const Stats: React.SFC = () => {
  const total = useSelector(
    (state: any) =>
      state.gamesList.gamesList && state.gamesList.gamesList.length
  );
  const missing = useSelector(
    (state: any) =>
      state.gamesList.gamesList &&
      state.gamesList.gamesList.filter(
        (game: GameCardInterface) => game.missing === true
      ).length
  );
  const found = useSelector(
    (state: any) =>
      state.gamesList.gamesList && state.gamesList.filteredGames.length
  );

  useEffect(() => {}, []);

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
      {/* <div>
        <b>Recent new complete pages</b>: 99Vidas, Annet Futatabi, Batman:
        Arkham Asylum, Charlie Murder, Dad 'n Me, Double Dragon IV, Nekketsu
        Oyako, Oni, Urban Reign, World Heroes Supreme Justice Extra
      </div> */}
      <br />
    </div>
  );
};

export default Stats;
