import React, { Component } from 'react';
import './style.scss';
import ApiService from '../../services/ApiService';
import Spinner from '../../components/Spinner';

export default class RandomGame extends Component {

  apiService = new ApiService();

  state = {
    game: {},
    loading: true
  };

  constructor() {
    super();
    this.updateGame();
  }

  onGameLoaded = (game) => {
    this.setState({
        game,
        loading: false
      },
    )
  };

  updateGame() {
    const id = Math.floor(Math.random() * 214);

    this.apiService
      .getGame(id)
      .then(this.onGameLoaded);
  }

  render() {
    const { game, loading } = this.state;

    const spinner = loading ? <Spinner /> : null;
    const content = !loading ? <GameView game={game}/> : null;

    return (
      <div className="random-game">
        {spinner}
        {content}
      </div>
    );
  }
}

const GameView = ({game}) => {
  const { name, platform, cover } = game;

  return (
    <React.Fragment>
        <h2>Random game</h2>
        <h3>{name}</h3>
        <p>{platform}</p>
        <img src={cover} className="random-game__image" alt={name}/>
    </React.Fragment>
  )
}