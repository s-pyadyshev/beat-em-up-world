import React from 'react';
import GameListItem from '../GameListItem';
import './style.scss';

// Presentational component
class GameList extends React.Component {
    render() { 
        return (
            <ul className="game-list">
                {this.props.games.map((item, index) => {
                    (
                        <li
                            className="game-list__item"
                            key={index}
                        >
                            <GameListItem
                                name={item.name}
                            />
                      </li>
                    )}
                )}
            </ul>
        );
    }
}

export default GameList;
