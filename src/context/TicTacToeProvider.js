import React, { useState } from 'react';
import TicTacToeContext from './TicTacToeContext';

function TicTacToeProvider({ children }) {
  const [activePlayer, setActivePlayer] = useState(1);
  const [gameBoard, setGameBoard] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0]);

  const contextValue = {
    activePlayer,
    setActivePlayer,
    gameBoard,
    setGameBoard,
  };

  return (
    <TicTacToeContext.Provider value={contextValue}>
      {children}
    </TicTacToeContext.Provider>
  );
}

export default TicTacToeProvider;
