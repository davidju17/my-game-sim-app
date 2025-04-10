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
import { WINNING_COMBINATIONS } from './winning-combinations.js';
import GameOver from './components/GameOver.jsx';


function deriveActivePlayer(gameTurns) {
  let currentPlayer = 'X';

  if (gameTurns.length > 0 && gameTurns[0].player === 'X') {
    currentPlayer = 'O';
  }

  return currentPlayer;
}

function App() {

  const [players, setPlayers] = useState({ PLAYERS })
  const [gameTurns, setGameTurns] = useState([]);
  const activePlayer = deriveActivePlayer(gameTurns);

  let gameBoard = [...INITIAL_GAME_BOARD.map(row => [...row])]; // deep copy of the initial game board

  // derive state from gameTurns 
  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;

    gameBoard[row][col] = player;
  }

  let winner;

  for (const combinations of WINNING_COMBINATIONS) {
    const firstSquareSymbol = gameBoard[combinations[0].row][combinations[0].column];
    const secondSquareSymbol = gameBoard[combinations[1].row][combinations[1].column];
    const thirdSquareSymbol = gameBoard[combinations[2].row][combinations[2].column];

    // cheking if all three squares are occupied by the same player
    if (firstSquareSymbol && firstSquareSymbol === secondSquareSymbol && firstSquareSymbol === thirdSquareSymbol) {
      winner = players[firstSquareSymbol];
    }
  }

  const hasDrawn = gameTurns.length === 9 && !winner;


  function handleSelectSquare(rowIndex, colIndex) {

    setGameTurns(prevTurns => {

      let currentPlayer = deriveActivePlayer(prevTurns);

      const updatedTurns = [{ square: { row: rowIndex, col: colIndex }, player: currentPlayer },
      ...prevTurns,
      ];

      return updatedTurns;
    })
  }

  function handleRestart() {
    setGameTurns([]);
  }

  function handlePlayerNameChanged(symbol, newName) {
    setPlayers((prevPlayers) => {
      return {
        ...prevPlayers,
        //javascript's computed property name syntax
        [symbol]: newName
      };
    });
  }

  return (
    <>
      <main>
        <div id='game-container'>
          <ol id='players' className='highlight-player'>
            <Player initialName={PLAYERS.X}
              symbol='X'
              isActive={activePlayer === 'X'}
              onChangeName={handlePlayerNameChanged}
            />
            <Player initialName={PLAYERS.O}
              symbol='O'
              isActive={activePlayer === 'O'}
              onChangeName={handlePlayerNameChanged}
            />
          </ol>
          {(winner || hasDrawn) && <GameOver winner={winner} onRestart={handleRestart} />}
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
