import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import GameList from './components/GameList/GameList';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';
import { Provider, connect } from 'react-redux';
// import store from './store';
import { fetchPostsRequest, fetchPostsSuccess, fetchPostsError } from './actions';
import reducers from './reducers';
import ReduxThunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';


function fetchPostsWithRedux() {
  return (dispatch) => {
    dispatch(fetchPostsRequest());
    return fetchPosts().then(([response, json]) =>{
      if(response.status === 200){
        dispatch(fetchPostsSuccess(json))
      }
      else{
        dispatch(fetchPostsError())
      }
    })
  }
}

function fetchPosts() {
  const URL = "https://raw.githubusercontent.com/s-pyadyshev/beat-em-ups-api/master/beatemups.json";
  return fetch(URL, { method: 'GET'})
     .then( response => Promise.all([response, response.json()]));
}

class App extends React.Component {
  componentDidMount(){
    this.props.fetchPostsWithRedux()
  }
  render(){
    return (
        <ul>
        {this.props.posts && this.props.posts.map((item, index) => {
            return(
              <li key={index}>
                <a href="">{item.name}</a>
              </li>
            )
          })
        }
        </ul>
    )
  }
}


function mapStateToProps(state){
  return {
    posts: state.posts
  }
}


let Container = connect(mapStateToProps, {fetchPostsWithRedux})(App);

const store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(ReduxThunk)
);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Container />
        </BrowserRouter>
    </Provider>, document.getElementById('root'));
registerServiceWorker();