import React, { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { filterGames } from "../../redux";


const Select = (props) => {
  // const [useValue, setValue] = useState("1");
  // const values = ["1", "2", "3", "4"];
  const dispatch = useDispatch();

  const handleSelect = (event) => {
    // setValue(event.target.value);
    dispatch(filterGames(props.name, event.target.value));
  }

  return (
    <div>
      <label>
        <span>{props.name}</span>
        <select name={props.name} onChange={handleSelect}>
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
