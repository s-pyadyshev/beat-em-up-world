import React from "react";
import { Link } from "react-router-dom";
import { GameListItemInterface } from "../../interfaces/GameListItem";
import "./style.scss";

const GameListItem = (props: GameListItemInterface) => {
  const { index, name, platform, multigenre } = props;
  const uniqGameName = `/${name}-${platform}`;
  const uniqGameNameId = uniqGameName.replace(/[\s:&'.!?]/g, "").toLowerCase();

  return (
    <li
      className={multigenre ? "gamelist-item multigenre" : "gamelist-item"}
      key={index}
    >
      <Link to={uniqGameNameId}>
        {name} <span> [{platform}]</span>
      </Link>
    </li>
  );
};

export default GameListItem;
