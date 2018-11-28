import React from 'react';
import GameListItem from '../GameListItem';
import './style.scss';

class GameList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      games: [],
      filteredGames: [],
      // players: 1
    };
    // this.filterByPlayers = this.filterByPlayers.bind(this);
  }

  componentDidMount() {
    // const URL = "https://raw.githubusercontent.com/s-pyadyshev/beat-em-ups-api/master/beatemups.json";
    // fetch(URL)
    //   .then(response => response.json())
    //   .then(json => this.setState({
    //     games: json,
    //     filteredGames: json
    //   }))
  }

  // filterByPlayers(event) {
  //   this.setState({
  //     filteredGames: this.state.games.filter(item => item.players === event.target.value),
  //     players: event.target.value
  //   });
  // }

    render() {
        return (
          <div>
            <ul className="game-list">
                {this.state.filteredGames.map((item, index) => {
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

