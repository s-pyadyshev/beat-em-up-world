import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";

const GameListItem = (props: any) => {
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
