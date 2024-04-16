import { Link } from "react-router-dom";
import { IGameListItem } from "../../interfaces/GameListItem";
import "./style.scss";

const GameListItem = (props: IGameListItem) => {
  const { index, name, platform, multigenre } = props;
  const uniqGameName = `/${name}-${platform}`;
  const uniqGameNameId = uniqGameName.replace(/[\s:&'./!?]/g, "").toLowerCase();

  return (
    <li
      // TODO classnames
      className={multigenre ? "gameslist-item multigenre" : "gameslist-item"}
      key={index}
    >
      <Link to={`games/${uniqGameNameId}`}>
        {name} <span> [{platform}]</span>
      </Link>
    </li>
  );
};

export default GameListItem;
