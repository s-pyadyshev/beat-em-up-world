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
    const {
      game: {
        name,
        platform,
        cover
      },
      loading } = this.state; // destructuring

    if (loading) {
      return <Spinner/>
    }

    return (
      <div className="RandomGame">
        <h2>Random game</h2>
        <h3>{name}</h3>
        <p>{platform}</p>
        <img src={cover} className="RandomGame__image" alt={name}/>
      </div>
    );
  }
}