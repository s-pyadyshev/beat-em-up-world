import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import FormSelect from '../Select';
import GameListItem from '../GameListItem';
import './style.scss';

class GameList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // If we set wrong state data type then it will be "Uncaught TypeError: this.state.data.map is not a function"
      games: [],
      filteredGames: [],
      players: 1
    };
    this.filterByPlayers = this.filterByPlayers.bind(this);
  }


  componentDidMount() {
    const URL = "https://raw.githubusercontent.com/s-pyadyshev/beat-em-ups-api/master/beatemups.json";
    fetch(URL)
      .then(response => response.json())
      .then(json => this.setState({
        games: json,
        filteredGames: json
      }))
  }

  filterByPlayers(event) {
    this.setState({
      filteredGames: this.state.games.filter(item => item.players === event.target.value),
      players: event.target.value
    });
  }

    render() {
      const playersAmount = [
        {value: 1, valueName: 1},
        {value: 2, valueName: 2},
        {value: 3, valueName: 3},
        {value: 4, valueName: 4}
      ];
        return (
          <div>

            <form className="form" autoComplete="off">
                <FormControl>
                    <InputLabel htmlFor="filter-players">Players</InputLabel>
                    <FormSelect
                        autoWidth
                        value={this.state.players}
                        options={playersAmount}
                        onChange={this.filterByPlayers}
                    >
                    </FormSelect>
                </FormControl>
            </form>

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

