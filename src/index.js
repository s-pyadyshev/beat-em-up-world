import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';
import { Provider, connect } from 'react-redux';
// import store from './store';
import ReduxThunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';


function fetchPostsRequest(){
  return {
    type: "FETCH_REQUEST"
  }
}

function fetchPostsSuccess(payload) {
  return {
    type: "FETCH_SUCCESS",
    payload
  }
}

function fetchPostsError() {
  return {
    type: "FETCH_ERROR"
  }
}

const reducer = (state = {}, action) => {
  switch (action.type) {
    case "FETCH_REQUEST":
      return state;
    case "FETCH_SUCCESS": 
      return {...state, posts: action.payload};
    default:
      return state;
  }
} 

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
				{
        	this.props.posts && 
          this.props.posts.map((post) =>{
          	return(
            	<li>{post.name}</li>
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
    reducer,
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