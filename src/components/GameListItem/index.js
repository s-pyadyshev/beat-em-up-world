import React from 'react';
// import './GameListItem.scss';

class GameListItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() {
        return (
            <a href="/">
                <span>{this.props.name}</span>
            </a>
        );
    }
}

export default GameListItem;
