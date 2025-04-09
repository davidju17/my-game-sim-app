import { useState } from "react";

const INITIAL_GAME_BOARD = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ];


export default function GameBoard() {
    const [gameBoard, setGameBoard] = useState(INITIAL_GAME_BOARD);

    function handleSelectSquare(rowIndex, colIndex) {
        setGameBoard((prevGameBoard) => {
            // create new array to avoid mutating the state directly
            const updatedBoard = [...prevGameBoard.map(innerArray => [...innerArray])];
            updatedBoard[rowIndex][colIndex] = 'X';
            return updatedBoard;
        });
    }

    return (
        <ol id='game-board'>
            {gameBoard.map((row, rowIndex) => (
                <li key={rowIndex}>
                     <ol>
                         {row.map((playerSymbol, colIndex) =>
                             <li key={colIndex} >
                                 <button onClick={()=>handleSelectSquare(rowIndex,colIndex)}>{playerSymbol}</button>
                             </li>)}
                     </ol>
                </li>
            ))}
        </ol>
    );
}