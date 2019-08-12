import React, { Component } from 'react';
import Link from '@material-ui/core/Typography';
import withData from '../hoc-helpers';
import ApiService from '../../services/ApiService';
import './style.scss';
import { GameConsumer } from '../../components/GameContext';


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
        <GameConsumer>
          {(context) => (
            <Link color="primary" onClick={() => {context.setGameCard(index)}}>
              <span>{name}</span>
            </Link>
          )}
        </GameConsumer>
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