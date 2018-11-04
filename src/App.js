import React, { Component } from 'react';
import './App.scss';
import Grid from '@material-ui/core/Grid';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import GameListContainer from './components/GameListContainer';
import FilterContainer from './components/FilterContainer';

class App extends Component {
  render(){
    return (
      <div className="App">
        {/* <FilterContainer> */}
          <Grid container>
            <Grid item xs={12}>
              <Header/>
            </Grid>
            <Grid item xs={3}>
              <Sidebar/>
            </Grid>
            <Grid item xs={9}>
              <GameListContainer/>
            </Grid>
          </Grid>
        {/* </FilterContainer> */}
      </div>
    )
  }
}

export default FilterContainer(App);