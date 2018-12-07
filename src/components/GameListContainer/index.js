import React from 'react';
import GameListItem from '../GameListItem';
import './style.scss';

class GameList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      games: [],
      isLoading: false,
      error: null
      // filteredGames: [],
      // players: 1
    };
    // this.filterByPlayers = this.filterByPlayers.bind(this);
  }

  // the most basic React.js fetch API example
  // componentDidMount() {
  //   this.setState({ isLoading: true });
  //   const URL = "https://raw.githubusercontent.com/s-pyadyshev/beat-em-ups-api/master/beatemups.json";
  //   fetch(URL)
      // .then(response => {
      //   if (response.ok) {
      //     return response.json();
      //   } else {
      //     throw new Error('Something went wrong ...');
      //   }
      // })
  //     .then(json => this.setState({
  //       games: json,
  //       isLoading: false
  //     }))
  //     .catch(error => this.setState({ error, isLoading: false }));
  // }

  // filterByPlayers(event) {
  //   this.setState({
  //     filteredGames: this.state.games.filter(item => item.players === event.target.value),
  //     players: event.target.value
  //   });
  // }

  render() {
    const { games, isLoading, error } = this.state;

    if (error) {
      return <p>{error.message}</p>;
    }

    if (isLoading) {
      return <p>Loading ...</p>;
    }
    return (
      <div>
        <ul className="game-list">
          {games.map((item, index) => {
            return (
              <li
                className="game-list__item"
                key={index}>
                <GameListItem
                    name={item.name}
                />
              </li>
            )}
          )}
        </ul>
      </div>
    );
  }
}

export default GameList;

