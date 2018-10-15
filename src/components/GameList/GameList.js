import React from 'react';
import GameListItem from '../GameListItem/GameListItem';
import './GameList.scss';
// import store from '../../store/store';

class GameList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            games: []
        }
    }

    componentDidMount() {
        const url = "https://raw.githubusercontent.com/s-pyadyshev/beat-em-ups-api/master/beatemups.json";
        fetch(url)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    games: data
                });
            }
        )
    }

    render() { 
        return (
            <ul className="game-list">
                {this.state.games.map((item, index) =>
                    <li className="game-list__item"
                        key={index}>
                        <GameListItem
                            name={item.name}
                        />
                    </li>
                )}
            </ul>
        );
    }
}

export default GameList;
