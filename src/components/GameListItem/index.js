import React from 'react';
import './style.scss';

class GameListItem extends React.Component {
  render() {
    return (
      <a href="/">
        <span>{this.props.name}</span>
      </a>
    );
  }
}

export default GameListItem;
