import React from 'react';
import GameListItem from '../GameListItem';
import './style.scss';

class GameList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // If we set wrong state data type then it will be "Uncaught TypeError: this.state.data.map is not a function"
      games: [],
      players: 1
    };
    this.filterByPlayers = this.filterByPlayers.bind(this);
  }


  componentDidMount() {
    const URL = "https://raw.githubusercontent.com/s-pyadyshev/beat-em-ups-api/master/beatemups.json";
    fetch(URL)
      .then(response => response.json())
      .then(json => this.setState({ games: json }))
  }

  filterByPlayers(event) {
    this.setState({
      // games: this.state.games.filter(item => item.players.toString() === event.target.value),
      players: event.target.value
    });
  }

    render() { 
        return (
          <div>

            <select value={this.state.players} onChange={this.filterByPlayers}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>

            <ul className="game-list">
                {this.state.games.map((item, index) => {
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
