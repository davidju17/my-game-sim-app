export default function Log({ turns }) {
    return (
      <ol id="log">
        {turns.map((turn) => (
          //use javascript's template literal syntax to generate a unique key for each list item
          <li key={`${turn.square.row}${turn.square.col}`}>
            {turn.player} selected {turn.square.row},{turn.square.col}
          </li>
        ))}
      </ol>
    );
  }
  