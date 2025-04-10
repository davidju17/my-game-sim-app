export default function GameOver({winner, onRestart})
{
    return (
        <div id="game-over">
            <h2>Game Over</h2>
            {winner && <p>Congratulations! {winner} won!</p>}
            {!winner && <p>It is a drawn</p>}
            <p>
            <button onClick={onRestart}>Play Again</button>
            </p>
        </div>
    );
}