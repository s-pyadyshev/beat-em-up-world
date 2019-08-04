import React, { Component } from 'react';
import './style.scss';
import ApiService from '../../services/ApiService';

export default class RandomGame extends Component {

  apiService = new ApiService();

  state = {
    game: {}
  };

  constructor() {
    super();
    this.updateGame();
  }

  onGameLoaded = (game) => {
    this.setState({game})
  };

  updateGame() {
    const id = Math.floor(Math.random() * 214);

    this.apiService
      .getGame(id)
      .then(this.onGameLoaded);
  }

  render() { 
    const { game: { name, platform, cover } } = this.state; // destructuring

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