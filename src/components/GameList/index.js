import React from 'react';
import withData from '../hoc-helpers';
import ApiService from '../../services/ApiService';
import './style.scss';

const GameList = (props) => {

  const { data } = props;

  const items = data.map((name, index) => {
    return (
      <li
        className="game-list__item"
        key={index}
      >
        <a href="/">
          <span>{name}</span>
        </a>
      </li>
    )}
  )

  return (
    <ul className="game-list">
      {items}
    </ul>
  );
}

const { getNames } = new ApiService();

export default withData(GameList, getNames);