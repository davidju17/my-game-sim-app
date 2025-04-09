import { useState } from 'react';

const PLAYERS = {
  X: 'Player 1',
  O: 'Player 2'
}

import './App.css'
import Player from './components/Player';
import GameBoard from './components/GameBoard';

function App() {

  const [gameTurns, setGameTurns] = useState([]);
  const [activePlayer, setActivePlayer] = useState('X');

  function handleSelectSquare(rowIndex, colIndex) {
    setActivePlayer((curActivePlayer) => (curActivePlayer === 'X' ? 'O' : 'X'));
    setGameTurns(prevTurns => {

      let currentPlayer = 'X';

      if (prevTurns.length > 0 && prevTurns[0].player === 'X') {
        currentPlayer = 'O';
      }

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
      </main>
    </>
  )
}

export default App
