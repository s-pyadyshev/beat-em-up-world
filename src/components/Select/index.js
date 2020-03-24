import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { filterGames } from "../../redux/gamesList/actions";
// import { Manager, Reference, Popper } from 'react-popper';
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
        <div>
          <strong className="select__name">{props.filterName}</strong>
          {/* <Manager>
            <Reference>
              {({ ref }) => (
                <span className="select__info-icon" ref={ref}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><circle cx="256" cy="378.5" r="25"/><path d="M256 0C114.516 0 0 114.497 0 256c0 141.484 114.497 256 256 256 141.484 0 256-114.497 256-256C512 114.516 397.503 0 256 0zm0 472c-119.377 0-216-96.607-216-216 0-119.377 96.607-216 216-216 119.377 0 216 96.607 216 216 0 119.377-96.607 216-216 216z"/><path d="M256 128.5c-44.112 0-80 35.888-80 80 0 11.046 8.954 20 20 20s20-8.954 20-20c0-22.056 17.944-40 40-40s40 17.944 40 40-17.944 40-40 40c-11.046 0-20 8.954-20 20v50c0 11.046 8.954 20 20 20s20-8.954 20-20v-32.531c34.466-8.903 60-40.26 60-77.469 0-44.112-35.888-80-80-80z"/></svg>
                </span>
              )}
            </Reference>
            <Popper placement="right" className="popper">
              {({ ref, style, placement, arrowProps }) => (
                <div ref={ref} style={style} data-placement={placement}>
                  {props.description}
                  <div ref={arrowProps.ref} style={arrowProps.style} className="popper__arrow"/>
                </div>
              )}
            </Popper>
          </Manager> */}
          <span className="select__info-icon" title={props.description}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><circle cx="256" cy="378.5" r="25"/><path d="M256 0C114.516 0 0 114.497 0 256c0 141.484 114.497 256 256 256 141.484 0 256-114.497 256-256C512 114.516 397.503 0 256 0zm0 472c-119.377 0-216-96.607-216-216 0-119.377 96.607-216 216-216 119.377 0 216 96.607 216 216 0 119.377-96.607 216-216 216z"/><path d="M256 128.5c-44.112 0-80 35.888-80 80 0 11.046 8.954 20 20 20s20-8.954 20-20c0-22.056 17.944-40 40-40s40 17.944 40 40-17.944 40-40 40c-11.046 0-20 8.954-20 20v50c0 11.046 8.954 20 20 20s20-8.954 20-20v-32.531c34.466-8.903 60-40.26 60-77.469 0-44.112-35.888-80-80-80z"/></svg>
          </span>
        </div>
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
