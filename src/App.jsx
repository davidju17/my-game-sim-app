import { useState } from 'react';

const PLAYERS = {
  X: 'Player 1',
  O: 'Player 2'
}

const INITIAL_GAME_BOARD = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];


import './App.css'
import Player from './components/Player';
import GameBoard from './components/GameBoard';
import Log from './components/Log';


function deriveActivePlayer(gameTurns) {
  let currentPlayer = 'X';

  if (gameTurns.length > 0 && gameTurns[0].player === 'X') {
    currentPlayer = 'O';
  }

  return currentPlayer;
}

function App() {

  const [gameTurns, setGameTurns] = useState([]);
  const activePlayer = deriveActivePlayer(gameTurns);

  let gameBoard = INITIAL_GAME_BOARD;

  // derive state from gameTurns 
  for (const turn of gameTurns) {
      const { square, player } = turn;
      const { row, col } = square;

      gameBoard[row][col] = player;
  }


  function handleSelectSquare(rowIndex, colIndex) {

    setGameTurns(prevTurns => {

      let currentPlayer = deriveActivePlayer(prevTurns);

      const updatedTurns = [{ square: { row: rowIndex, col: colIndex }, player: currentPlayer },
      ...prevTurns,
      ];

      return updatedTurns;
    })
  }

  return (
    <>
      <main>
        <div id='game-container'>
          <ol id='players' className='highlight-player'>
            <Player initialName={PLAYERS.X} symbol='X' isActive={activePlayer === 'X'} />
            <Player initialName={PLAYERS.O} symbol='O' isActive={activePlayer === 'O'} />
          </ol>
          <GameBoard
            onSelectSquare={handleSelectSquare}
            board={gameBoard} />
        </div>
        <Log turns={gameTurns} />
      </main>
    </>
  )
}

export default App
