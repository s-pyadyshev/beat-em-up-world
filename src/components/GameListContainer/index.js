import React from 'react';
import axios from 'axios';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import GameListItem from '../GameListItem';
import ControlSelect from '../ControlSelect';
import './style.scss';

class GameList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      games: [],
      isLoading: false,
      error: null,
      filteredGames: []
      // players: 1
    };
    this.filterByPlayers = this.filterByPlayers.bind(this);
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

  // axios example
  // componentDidMount() {
  //   this.setState({ isLoading: true });

  //   axios.get("https://raw.githubusercontent.com/s-pyadyshev/beat-em-ups-api/master/beatemups.json")
  //     .then(result => this.setState({
  //       games: result.data,
  //       isLoading: false
  //     }))
  //     .catch(error => this.setState({
  //       error,
  //       isLoading: false
  //     }));
  // }

  async componentDidMount() {
    this.setState({ isLoading: true });

    try {
      const result = await axios.get("https://raw.githubusercontent.com/s-pyadyshev/beat-em-ups-api/master/beatemups.json");

      this.setState({
        games: result.data,
        filteredGames: result.data,
        isLoading: false
      });
    } catch (error) {
      this.setState({
        error,
        isLoading: false
      });
    }
  }

  filterByPlayers(event) {
    this.setState({
      filteredGames: this.state.games.filter(item => item.players === event.target.value),
      players: event.target.value
    });
  }

  render() {
    const { games, filteredGames, isLoading, error } = this.state;

    if (error) {
      return <p>{error.message}</p>;
    }

    if (isLoading) {
      return <p>Loading ...</p>;
    }
    const playersAmount = [
      {value: 1, valueName: 1},
      {value: 2, valueName: 2},
      {value: 3, valueName: 3},
      {value: 4, valueName: 4}
  ];

    return (
      <div>
        <FormControl fullWidth>
            <InputLabel htmlFor="filter-players">Players</InputLabel>
            <ControlSelect
                value={this.state.players}
                options={playersAmount}
                onChange={this.filterByPlayers}
            >
            </ControlSelect>
        </FormControl>

        {/* <FormControl fullWidth>
            <InputLabel htmlFor="filter-fighters">Fighters</InputLabel>
            <ControlSelect
                value={this.state.fighters}
                options={fightersAmount}
                onChange={this.filterByFighters}
            >
            </ControlSelect>
        </FormControl> */}

        <ul className="game-list">
          {filteredGames.map((item, index) => {
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

