import React, { Component } from 'react';
import withData from '../hoc-helpers';
import ApiService from '../../services/ApiService';
import './style.scss';

class GameList extends Component {
  constructor(props) {
    super(props);
    this.state = {}
    this.setGameCard = this.setGameCard.bind(this);
  }

  setGameCard(index) {
    this.setState({
      gameIndex: index
    })
  }

  render() {
    const { data } = this.props;
    const items = data.map((name, index) => {
      return (
        <li
          className="game-list__item"
          key={index}
        >
          <div onClick={() => this.setGameCard(index)}>
            <span>{name}</span>
          </div>
        </li>
      )}
    )

    return (
      <ul className="game-list">
      {items}
    </ul>
    );
  };
}

const { getNames } = new ApiService();

export default withData(GameList, getNames);