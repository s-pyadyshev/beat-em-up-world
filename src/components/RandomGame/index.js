import React, { Component } from 'react';
import './style.scss';
import ApiService from '../../services/ApiService';
import Spinner from '../../components/Spinner';
import ErrorIndicator from '../../components/ErrorIndicator';

export default class RandomGame extends Component {

  apiService = new ApiService();

  state = {
    game: {},
    loading: true,
    error: false
  };

  constructor() {
    super();
    // bad practice - side effect in constructor
    // this.updateGame();
  }

  componentDidMount() {
    this.updateGame();
  }

  onGameLoaded = (game) => {
    this.setState({
        game,
        loading: false
      },
    )
  };

  onError = (err) => {
    this.setState({
      error: true,
      loading: false
    })
  }

  updateGame() {
    const id = Math.floor(Math.random() * 214);

    this.apiService
      .getGame(id)
      .then(this.onGameLoaded)
      .catch(this.onError);
  }

  render() {
    const { game, loading, error } = this.state;
    
    const hasData = !(loading || error);

    const errorMessage = error ? <ErrorIndicator/> : null;
    const spinner = loading ? <Spinner /> : null;
    const content = hasData ? <GameView game={game}/> : null;

    return (
      <div className="random-game">
        {errorMessage}
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

