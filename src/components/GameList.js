import React from 'react';

class GameList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <ul className="game-list">
                <div className="game-list__item"></div>
            </ul>
        );
    }
}
 
export default GameList;