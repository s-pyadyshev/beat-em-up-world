import React from 'react';
import GameListItem from '../GameListItem/GameListItem';
import { connect } from 'react-redux';
import './GameList.scss';

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

const mapStateToProps = store => {
    console.log(store);
    return {
        games: store.games,
    }
}

// export default GameList;
export default connect(mapStateToProps)(GameList);
