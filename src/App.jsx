import { useState } from 'react';

const PLAYERS = {
  X: 'Player 1',
  O: 'Player 2'
}

import './App.css'
import Player from './components/Player';
import GameBoard from './components/GameBoard';

function App() {
  const [activePlayer, setActivePlayer] = useState('X');

  function handleSelectSquare(){
    setActivePlayer((curActivePlayer) => (curActivePlayer === 'X' ? 'O' : 'X'));
  }

  return (
    <>
      <main>
        <div id='game-container'>
          <ol id='players' className='highlight-player'>
            <Player initialName={PLAYERS.X} symbol='X' isActive={activePlayer === 'X'}/>
            <Player initialName={PLAYERS.O} symbol='O' isActive={activePlayer === 'O'}/>
          </ol>
          <GameBoard onSelectSquare = {handleSelectSquare} activePlayerSymbol = {activePlayer}/>
        </div>
      </main>
    </>
  )
}

export default App
