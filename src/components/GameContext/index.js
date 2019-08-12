import React from 'react';

// const {
//   Provider: GameProvider,
//   Consumer: GameConsumer
// } = React.createContext();

const GameContext = React.createContext({})
const GameProvider = GameContext.Provider
const GameConsumer = GameContext.Consumer

export {
  GameProvider,
  GameConsumer
};