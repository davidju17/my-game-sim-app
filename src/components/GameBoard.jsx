import { useState } from "react";

const INITIAL_GAME_BOARD = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
];


export default function GameBoard({ onSelectSquare, turns }) {

    let gameBoard = INITIAL_GAME_BOARD;

    // derive state from turns prop
    for (const turn of turns) {
        const { square, player } = turn;
        const { row, col } = square;

        gameBoard[row][col] = player;
    }

    return (
        <ol id='game-board'>
            {gameBoard.map((row, rowIndex) => (
                <li key={rowIndex}>
                    <ol>
                        {row.map((playerSymbol, colIndex) =>
                            <li key={colIndex} >
                                <button onClick={() => onSelectSquare(rowIndex, colIndex)}
                                    disabled={playerSymbol !== null}>
                                    {playerSymbol}
                                </button>
                            </li>)}
                    </ol>
                </li>
            ))}
        </ol>
    );
}