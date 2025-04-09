import { useState } from 'react';

const PLAYERS = {
  X: 'Player 1',
  O: 'Player 2'
}

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
            turns={gameTurns} />
        </div>
        <Log turns={gameTurns} />
      </main>
    </>
  )
}

export default App
