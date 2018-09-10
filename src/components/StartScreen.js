import React from 'react';
import MainMenu from '../components/MainMenu';

const StartScreen = (props) => {
    return (
        <div className="start-screen">
            <h1>Beat'em up World</h1>
            <MainMenu/>
        </div>
    )
}

export default StartScreen;