import React from 'react';
import GameListItem from '../GameListItem/GameListItem';
import { fetchGamesRequest, fetchGamesSuccess, fetchGamesError } from '../../actions/actions';
import { connect } from 'react-redux';
import './GameList.scss';

function fetchPostsWithRedux() {
	return (dispatch) => {
  	dispatch(fetchGamesRequest());
    return fetchGames().then(([response, json]) =>{
    	if(response.status === 200){
      	dispatch(fetchGamesSuccess(json))
      }
      else{
      	dispatch(fetchGamesError())
      }
    })
  }
}


function fetchGames() {
    const URL = "https://raw.githubusercontent.com/s-pyadyshev/beat-em-ups-api/master/beatemups.json";
    return fetch(URL, { method: 'GET'})
       .then( response => Promise.all([response, response.json()]));
  }

class GameList extends React.Component {
	componentDidMount(){
        this.props.fetchGamesWithRedux()
    }

    // componentDidMount() {
    //     const url = "https://raw.githubusercontent.com/s-pyadyshev/beat-em-ups-api/master/beatemups.json";
    //     fetch(url)
    //         .then(response => response.json())
    //         .then(data => {
    //             console.log(data);
    //             return data;
    //         }
    //     )
    // }

    render() { 
        return (
            <ul className="game-list">
                {this.props.games.map((item, index) =>
                    <li className="game-list__item"
                        key={index}>
                        <GameListItem
                            name={item.name}
                        />
                    </li>
                )}
            </ul>
        );
    }
}

const mapStateToProps = state => {
    return {
      games: state.games
    }
}

// const mapDispatchToProps = dispatch => {
//     return {
//       submitNewMessage: (message) => dispatch(addMessage(message))
//     }
// }

// export default GameList;
export default connect(mapStateToProps, {fetchPostsWithRedux})(GameList);
