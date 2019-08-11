import React from 'react';
import './style.scss';

class GameList extends React.Component {


  constructor() {
    super();
    this.state = {
      names: ['name1', 'name2', 'name3']
    }
  }

  render() {

    return (
      <ul className="game-list">
        <li>list item</li>
        {/* {this.state.names.map((name, index) => {
          (
            <li
              className="game-list__item"
              key={index}
            >
              <a href="/">
                <span>{name}</span>
              </a>
            </li>
          )}
        )} */}
      </ul>
    );
  }
}

export default GameList;