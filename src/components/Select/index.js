import React from 'react';
import { useDispatch } from "react-redux";
import { filterGames } from "../../redux";
import './style.css';


const Select = (props) => {
  const dispatch = useDispatch();

  const handleSelect = (event) => {
    if (event.target.value === "") {
      dispatch(filterGames(props.name, event.target.value));
    } else if (event.target.value[0].match(/^["0123456789"]*$/g)) {
      dispatch(filterGames(props.name, +event.target.value));
    } else {
      dispatch(filterGames(props.name, event.target.value));
    }
  };

  return (
    <div>
      <label>
        <div><strong>{props.name}</strong> <span title={props.description}>&#x1F6C8;</span></div>
        <select name={props.name} onChange={handleSelect}>
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
