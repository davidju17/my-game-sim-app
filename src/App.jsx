import React, { useState } from 'react';

const PLAYERS = {
  X: 'Player 1',
  O: 'Player 2'
}

import './App.css'

function App() {

  return (
    <>
    <main>
      <div id='game-container'>
          <ol id='players'>
          <li>
            {/* for styling reasons use span */}
            <span className='player-name'>{PLAYERS.X}</span>
            <span className='player-symbol'>X</span>
          </li>
          <li>
            <span className='player-name'>{PLAYERS.O}</span>
            <span className='player-symbol'>O</span>
          </li>
        </ol>
        GAME BOARD
      </div>
    </main>
    </>
  )
}

export default App
