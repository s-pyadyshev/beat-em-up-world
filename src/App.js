import React, { Component } from 'react';
import './App.scss';
import Grid from '@material-ui/core/Grid';
import Header from './components/Header';
import RandomGame from './components/RandomGame';
import GameList from './components/GameList';
import GameCard from './components/GameCard';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Grid container>
            <Grid item xs={12}>
              <Header/>
            </Grid>

            <Grid item xs={2}>
              <GameList/>
            </Grid>

            <Grid item xs={7}>
              <GameCard/>
            </Grid>

            <Grid item xs={3}>
              <RandomGame/>
            </Grid>
          </Grid>
      </div>
    )
  }
}

export default App;