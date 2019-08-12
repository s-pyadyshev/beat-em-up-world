import React, { Component } from 'react';
import './App.scss';
import Grid from '@material-ui/core/Grid';
import Header from './components/Header';
import RandomGame from './components/RandomGame';
import GameList from './components/GameList';
import GameCard from './components/GameCard';
import ApiService from './services/ApiService';
import { GameProvider, GameConsumer } from './components/GameContext';


export default class App extends Component {
  constructor(){
    super();
    this.state = {
      gameIndex: null
    }
  }

  apiService = new ApiService();

  render() {
    return (
      <div className="App">
        <GameProvider value={{state: this.state, setGameCard: (value) => this.setState({gameIndex: value})}}>
          <Grid container>
            <Grid item xs={12}>
              <Header/>
            </Grid>

            <Grid item xs={3}>
              <GameList getData={this.apiService.getNames}/>
            </Grid>

            <Grid item xs={6}>
              <GameConsumer>
                {() => (<GameCard gameIndex={this.state.gameIndex}/>)}
              </GameConsumer>
            </Grid>

            <Grid item xs={3}>
              <RandomGame/>
            </Grid>
          </Grid>
        </GameProvider>
      </div>
    )
  }
}