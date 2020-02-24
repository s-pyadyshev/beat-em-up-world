import React, { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { filterGames } from "../../redux";


const Select = () => {
  const [useValue, setValue] = useState("1");
  const values = ["1", "2", "3", "4"];
  const dispatch = useDispatch();

  const handleSelect = (event) => {
    setValue(event.target.value);
    dispatch(filterGames(event.target.value));
  }

  return (
    <select value={useValue} onChange={handleSelect}>
      {values.map((value, index) => <option value={value} key={index}>{value}</option>)}
    </select>
  );
}

export default Select;
