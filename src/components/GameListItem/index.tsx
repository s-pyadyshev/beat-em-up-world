import { Link } from "react-router-dom";
import { IGameListItem } from "../../interfaces/GameListItem";
import "./style.scss";
import cn from "classnames";

const GameListItem = (props: IGameListItem) => {
  const { missing, index, name, platform, multigenre, undev } = props;
  const uniqGameName = `/${name}-${platform}`;
  const uniqGameNameId = uniqGameName.replace(/[\s:&'./!?]/g, "").toLowerCase();

  return (
    <li
      // TODO classnames
      className={cn({
        "gameslist-item": true,
        "multigenre": multigenre,
        "undev": undev,
        "missing": missing
      })}
      key={index}
    >
      {missing || undev ? (
        <span>
          {name} [{platform}]
        </span>
      ) : (<Link to={`games/${uniqGameNameId}`}>
          {name} <span> [{platform}]</span>
        </Link>)
      }
    </li>
  );
};

export default GameListItem;
