import React from 'react';
import './style.scss';
import ApiService from '../../services/ApiService';
import ErrorIndicator from '../../components/ErrorIndicator';

export default class GameList extends React.Component {

  constructor() {
    super();
    this.state = {
      names: [],
      loading: true,
      error: false
    }
  }

  apiService = new ApiService();

  componentDidMount() {
    this.updateGameList();
    // console.log(this.state.names);
  }

  updateGameList() {
    this.apiService
      .getNames()
      .then(this.onGameListLoaded)
      .catch(this.onError);
  }

  onGameListLoaded = (names) => {
    this.setState({
        names,
        loading: false
      },
    )
  };

  onError = () => {
    this.setState({ 
      error: true,
      loading: false
    })
  }


  render() {

    if (this.state.error) {
      return <ErrorIndicator/>;
    }

    return (
      <ul className="game-list">
        {this.state.names.map((name, index) => {
          return (
            <li
              className="game-list__item"
              key={index}
            >
              <a href="/">
                <span>{name}</span>
              </a>
            </li>
          )}
        )}
      </ul>
    );
  }
}