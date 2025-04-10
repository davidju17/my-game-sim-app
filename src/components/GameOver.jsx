export default function GameOver({winner})
{
    return (
        <div id="game-over">
            <h2>Game Over</h2>
            {winner && <p>Congratulations! {winner} You won!</p>}
            {!winner && <p>It is a drawn</p>}
            <p>
            <button>Play Again</button>
            </p>
        </div>
    );
}