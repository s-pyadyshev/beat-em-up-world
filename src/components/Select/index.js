import React from 'react';
import { useDispatch } from "react-redux";
import { filterGames } from "../../redux";
import './style.css';


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
        <div>{props.name} <span title={props.description}>info</span></div>
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
