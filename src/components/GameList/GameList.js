import React from 'react';
import GameListItem from '../GameListItem/GameListItem';
import { connect } from 'react-redux';
import './GameList.scss';

class GameList extends React.Component {

    componentDidMount() {
        const url = "https://raw.githubusercontent.com/s-pyadyshev/beat-em-ups-api/master/beatemups.json";
        fetch(url)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                return data;
            }
        )
    }

    render() { 
        return (
            <ul className="game-list">
                {/* {this.props.games.map((item, index) =>
                    <li className="game-list__item"
                        key={index}>
                        <GameListItem
                            name={item.name}
                        />
                    </li>
                )} */}
            </ul>
        );
    }
}

const mapStateToProps = state => {
    return {
      games: state
    }
}

// const mapDispatchToProps = dispatch => {
//     return {
//       submitNewMessage: (message) => dispatch(addMessage(message))
//     }
// }

// export default GameList;
export default connect(mapStateToProps)(GameList);
