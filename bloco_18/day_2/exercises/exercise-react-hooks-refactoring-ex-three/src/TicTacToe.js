import React, { useContext } from 'react';
import TicTacToeContext from './context/TicTacToeContext';
import GameBoard from './GameBoard';

function victoryArchivedInLine(gameBoard) {
  for (let i = 0; i <= 6; i += 3) {
    if (
      gameBoard[i] === gameBoard[i + 1] &&
      gameBoard[i + 1] === gameBoard[i + 2] &&
      gameBoard[i] !== 0
    )
      return gameBoard[i];
  }
  return false;
}

function victoryArchivedInColumn(gameBoard) {
  for (let i = 0; i <= 2; i += 1) {
    if (
      gameBoard[i] === gameBoard[i + 3] &&
      gameBoard[i + 3] === gameBoard[i + 6] &&
      gameBoard[i] !== 0
    )
      return gameBoard[i];
  }
  return false;
}

function victoryArchivedInDiagonals(gameBoard) {
  if (gameBoard[4] === 0) return false;
  if (gameBoard[0] === gameBoard[4] && gameBoard[4] === gameBoard[8]) {
    return gameBoard[0];
  }
  if (gameBoard[2] === gameBoard[4] && gameBoard[4] === gameBoard[6]) {
    return gameBoard[2];
  }
  return false;
}

function TicTacToe() {
  const { activePlayer, setActivePlayer, gameBoard, setGameBoard } =
    useContext(TicTacToeContext);

  function resetGame() {
    setActivePlayer(1);
    setGameBoard([0, 0, 0, 0, 0, 0, 0, 0, 0]);
  }

  function toggleActivePlayer() {
    if (activePlayer === 1) return 2;
    return 1;
  }

  function updateState(cellClicked) {
    const newState = [...gameBoard];
    let newActivePlayer = activePlayer;

    if (gameBoard[cellClicked] === 0) {
      newState[cellClicked] = activePlayer;
      newActivePlayer = toggleActivePlayer();
    } else {
      newState[cellClicked] = gameBoard[cellClicked];
    }
    setActivePlayer(newActivePlayer);
    setGameBoard(newState);
  }

  function victoryArchieved() {
    return (
      victoryArchivedInLine(gameBoard) ||
      victoryArchivedInColumn(gameBoard) ||
      victoryArchivedInDiagonals(gameBoard)
    );
  }

  function renderButton() {
    return (
      <button type="button" onClick={resetGame} data-testid="restart-button">
        Recomeçar Jogo
      </button>
    );
  }

  const win = victoryArchieved();
  if (!gameBoard.includes(0) && !win) {
    return (
      <>
        {renderButton()}
        <h1>Empate</h1>
      </>
    );
  }
  return (
    <>
      {renderButton()}
      {!win ? (
        <GameBoard gameState={gameBoard} updateGame={updateState} />
      ) : (
        <h1>{`Player ${win === 2 ? 'O' : 'X'} Ganhou`}</h1>
      )}
    </>
  );
}

export default TicTacToe;
