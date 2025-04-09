import React, { useState } from 'react';

const PLAYERS = {
  X: 'Player 1',
  O: 'Player 2'
}

import './App.css'
import Player from './components/Player';

function App() {

  return (
    <>
      <main>
        <div id='game-container'>
          <ol id='players'>
            <Player name={PLAYERS.X} symbol='X' />
            <Player name={PLAYERS.O} symbol='O' />
          </ol>
          GAME BOARD
        </div>
      </main>
    </>
  )
}

export default App
