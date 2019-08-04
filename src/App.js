import React, { Component } from 'react';
import './App.scss';
import Grid from '@material-ui/core/Grid';
import Header from './components/Header';
import RandomGame from './components/RandomGame';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Grid container>
            <Grid item xs={12}>
              <Header/>
            </Grid>
            <Grid item xs={3}>
            </Grid>
            <Grid item xs={9}>
              <RandomGame/>
              {/* <GameList/> */}
            </Grid>
          </Grid>
      </div>
    )
  }
}

export default App;