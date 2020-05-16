import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { filterGames } from "../../store/gamesList/actions";
import Tooltip from "../Tooltip";
import "./style.scss";

const Select = (props: any) => {
  const dispatch = useDispatch();
  const [isSelected, setSelected] = useState(false);
  const spriteNames = [
    "dashing",
    "focus",
    "grabs",
    "info",
    "lives",
    "music",
    "platform",
    "players",
    "playtime",
    "releaseYear",
    "restore",
    "revive",
    "series",
    "structure",
    "variety",
    "weapons",
  ];
  const { description, name, filterName, options } = props;

  const handleSelect = (event: any) => {
    if (event.target.value === "") {
      dispatch(filterGames(name, event.target.value));
      setSelected(false);
    } else if (event.target.value.match(/^[0-9]+$/)) {
      dispatch(filterGames(name, +event.target.value));
      setSelected(true);
    } else {
      dispatch(filterGames(name, event.target.value));
      setSelected(true);
    }
  };

  return (
    <div className={isSelected ? "select is-selected" : "select"}>
      <label className="select__label">
        <div className="select__label-inner">
          <strong className="select__name">{filterName}</strong>
        </div>
        <div className="select__control">
          <select className="select__input" name={name} onChange={handleSelect}>
            <option value="">--Choose an option--</option>
            {options.map((value: any) => (
              <option key={value} value={value}>
                {value}
              </option>
            ))}
          </select>
        </div>
      </label>
      <div className="select__icon">
        {spriteNames.includes(name) ? (
          <Tooltip placement="right" tooltip={description}>
            <svg>
              <use xlinkHref={`/images/sprite.svg#${name}`} />
            </svg>
          </Tooltip>
        ) : (
          <Tooltip placement="right" tooltip={description}>
            <svg>
              <use xlinkHref="/images/sprite.svg#info" />
            </svg>
          </Tooltip>
        )}
      </div>
    </div>
  );
};

export default Select;
