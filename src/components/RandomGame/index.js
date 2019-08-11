import React, { Component } from 'react';
import './style.scss';
import ApiService from '../../services/ApiService';
import Spinner from '../../components/Spinner';
import ErrorIndicator from '../../components/ErrorIndicator';
import Button from '@material-ui/core/Button';
import ErrorButton from '../../components/ErrorButton';

export default class RandomGame extends Component {

  apiService = new ApiService();

  state = {
    game: {},
    loading: true,
    error: false
  };

  constructor() {
    super();
    this.updateGame = this.updateGame.bind(this);
    // bad practice - side effect in constructor
    // this.updateGame();
  }

  componentDidMount() {
    this.updateGame();
  }

  componentDidUpdate() {
    // console.log('componentDidUpdate');
  }

  componentDidCatch() {
    this.setState({
      error: true
    })
  }

  onGameLoaded = (game) => {
    this.setState({
        game,
        loading: false
      },
    )
  };

  onError = () => {
    this.setState({ 
      error: true,
      loading: false
    })
  }

  updateGame() {
    const id = Math.floor(Math.random() * 214);

    this.apiService
      .getRandomGameCard(id)
      .then(this.onGameLoaded)
      .catch(this.onError);
  }

  render() {

    if (this.state.error) {
      return <ErrorIndicator/>;
    }

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
        <div>
          <Button variant="contained" color="primary" onClick={this.updateGame}>Refresh random game</Button>
          <ErrorButton/>
        </div>
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

