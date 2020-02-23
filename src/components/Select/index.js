import React, { useState } from 'react';

const Select = () => {
  const [useValue, setValue] = useState("1");
  const values = ["1", "2", "3", "4"];

  const handleSelect = (event) => {
    setValue(event.target.value);
  }

  return (
    <select value={useValue} onChange={handleSelect}>
      {values.map((value, index) => <option value={value} key={index}>{value}</option>)}
    </select>
  );
}

export default Select;
