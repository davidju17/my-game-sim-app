export default function GameOver({winner})
{
    return (
        <div id="game-over">
            <h2>Game Over</h2>
            <p>Congratulations! {winner} You won!</p>
            <p>
            <button>Play Again</button>
            </p>
        </div>
    );
}