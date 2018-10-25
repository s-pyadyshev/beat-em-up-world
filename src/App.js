import React, { Component } from 'react';
import './App.scss';
import Grid from '@material-ui/core/Grid';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import GameList from './components/GameList/GameList';

class App extends Component {
  render() {
    return (
        <div className="App">
          <Grid container>
            <Grid item xs={12}>
              <Header/>
            </Grid>
            <Grid item xs={3}>
                <Sidebar/>
            </Grid>
            <Grid item xs={9}>
              {/* <GameList/> */}
            </Grid>
          </Grid>
        </div>
    );
  }
}

export default App;
