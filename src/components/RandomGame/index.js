import React, { Component } from 'react';
import './style.scss';
import ApiService from '../../services/ApiService';

export default class RandomGame extends Component {

  apiService = new ApiService();

  state = {
    name: null,
    platform: null,
    cover: null
  };

  constructor() {
    super();
    this.updateGame();
  }



  updateGame() {
    const id = Math.floor(Math.random() * 214);

    this.apiService
      .getGame(id)
      .then((game) => {
        this.setState({
          name: game.name,
          platform: game.platform,
          cover: game.cover
        });
      });
  }

  render() { 
    const { name, platform, cover } = this.state; // destructuring

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