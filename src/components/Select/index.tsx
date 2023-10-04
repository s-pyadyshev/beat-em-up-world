// TODO Warning: Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterGames } from "../../store/gamesList/actions";
import Tooltip from "../Tooltip";
import { IApplicationState } from "../../interfaces/ApplicationState";
import { FilterInterface } from "../../interfaces/Filter";
import { spriteNames } from "../../constants/spriteNames";

import "./style.scss";

const Select = (props: FilterInterface) => {
  const dispatch = useDispatch();
  const [isSelected, setSelected] = useState(false);

  const { description, name, filterName, options, savedOption } = props;

  const filterOptions = useSelector(
    (state: IApplicationState) => state.gamesList.filterOptions
  );

  const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    if (event.target.value === "") {
      dispatch(filterGames(name, event.target.value));
      setSelected(false);
    } else if (event.target.value.match(/^[0-9]+$/)) {
      dispatch(filterGames(name, +event.target.value));
      setSelected(true);
    } else if (name === "multigenre") {
      dispatch(filterGames(name, true));
      setSelected(true);
    } else {
      dispatch(filterGames(name, event.target.value));
      setSelected(true);
    }
  };

  useEffect(() => {
    setSelected(savedOption);
  }, [savedOption]);

  useEffect(() => {
    if (filterOptions === "") {
      setSelected(false);
    }
  }, [filterOptions]);

  return (
    <div className={isSelected ? "select is-selected" : "select"}>
      <label className="select__label">
        <div className="select__label-inner">
          <strong className="select__name">{filterName}</strong>
        </div>
        <div className="select__control">
          <select className="select__input" name={name} onChange={handleSelect}>
            <option value="" selected={!isSelected}>
              --Choose an option--
            </option>
            {options.map((value: any) => (
              <option
                key={value}
                value={value}
                selected={value === savedOption}
              >
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
