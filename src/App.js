import React, { Component } from 'react';
import './App.scss';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Grid from '@material-ui/core/Grid';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Counter from './components/Counter';

const initialState = {
  count: 0
};

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case 'INCREMENT':
      return {
        count: state.count + 1
      };
    case 'DECREMENT':
      return {
        count: state.count - 1
      };
    default:
      return state;
  }
};

const store = createStore(reducer);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Grid container>
            <Grid item xs={12}>
              <Header/>
            </Grid>
            <Grid item xs={3}>
                <Sidebar/>
            </Grid>
            <Grid item xs={9}>
              <Counter/>
            </Grid>
          </Grid>
        </div>
      </Provider>
    );
  }
}

export default App;
