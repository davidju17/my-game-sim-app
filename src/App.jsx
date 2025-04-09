import React, { useState } from 'react';

const PLAYERS = {
  X: 'Player 1',
  O: 'Player 2'
}

import './App.css'
import Player from './components/Player';
import GameBoard from './components/GameBoard';

function App() {

  return (
    <>
      <main>
        <div id='game-container'>
          <ol id='players'>
            <Player initialName={PLAYERS.X} symbol='X' />
            <Player initialName={PLAYERS.O} symbol='O' />
          </ol>
          <GameBoard />
        </div>
      </main>
    </>
  )
}

export default App
