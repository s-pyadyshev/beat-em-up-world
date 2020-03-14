import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { filterGames } from "../../redux/gamesList/actions";
import './style.scss';


const Select = (props) => {
  const dispatch = useDispatch();
  const [isSelected, setSelected] = useState(false);

  const handleSelect = (event) => {
    if (event.target.value === "") {
      dispatch(filterGames(props.name, event.target.value));
      setSelected(false);
    } else if (event.target.value.match(/^[0-9]+$/)) {
      dispatch(filterGames(props.name, +event.target.value));
      setSelected(true);
    } else {
      dispatch(filterGames(props.name, event.target.value));
      setSelected(true);
    }
  };

  return (
    <div className={isSelected ? "is-selected" : null}>
      <label>
        <div><strong>{props.filterName}</strong> <span title={props.description}>&#x1F6C8;</span></div>
        <select
          name={props.name}
          onChange={handleSelect}>
          <option value="">--Choose an option--</option>
          {props.options.map((value, index) => (
            <option
              value={value}
              key={index}>
                {value}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
}

export default Select;
