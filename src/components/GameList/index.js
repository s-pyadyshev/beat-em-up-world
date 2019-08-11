import React from 'react';
import './style.scss';
import ErrorIndicator from '../../components/ErrorIndicator';

export default class GameList extends React.Component {

  constructor() {
    super();
    this.state = {
      itemList: [],
      loading: true,
      error: false
    }
  }

  componentDidMount() {
    const { getData } = this.props;

    getData()
    .then(this.onGameListLoaded)
    .catch(this.onError);
  }

  onGameListLoaded = (itemList) => {
    this.setState({
        itemList,
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
        {this.state.itemList.map((name, index) => {
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