import React from "react";
import { Link } from "react-router-dom";

const GameListItem = (props: any) => {
  const { index, name, platform } = props;
  const uniqGameName = `/${name}[${platform}]`;
  const uniqGameNameId = uniqGameName.replace(/\s/g, "").toLowerCase();

  return (
    <li className="gameslist-item" key={index}>
      <Link to={uniqGameNameId}>
        {name} <span> [{platform}]</span>
      </Link>
    </li>
  );
};

export default GameListItem;
