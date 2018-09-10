import React, { Component } from 'react';
import './App.scss';
// import { Route, Link, Switch } from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Grid container spacing={24}>
          <Grid item xs={12}>
            <Header/>
          </Grid>
          <Grid item xs={3}>
              <Sidebar/>
          </Grid>
          <Grid item xs={9}>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default App;
