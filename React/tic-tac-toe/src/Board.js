import './Board.css';
import Square from './Square';
import { useState } from 'react';


export default function Board() {
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));

  const renderSquare = () => {
    const rows = [0, 1, 2];
    const cols = [0, 1, 2];

    return rows.map((row) => (
      <div key={row} className="board-row">
        {cols.map((col) => (
          <Square key={col} value={squares[row * 3 + col]} handleClick={() => handleClick(row, col)} />
        ))}
      </div>
    ));
  };

  function handleClick(row, col) {
    if (squares[row * 3 + col] || calculateWinner(squares)) {
      return;
    }
    const nextSquares = squares.slice();
    nextSquares[row * 3 + col] = xIsNext ? 'X' : 'O';
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }

  function calculateWinner(squares) {
    // Kazanma kombinasyonlarını tanımlayalım
    const winCombos = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (const combo of winCombos) {
      const [a, b, c] = combo;
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a]; // Kazananın sembolünü döndürelim (X veya O)
      }
    }
    return null;
  }

  const winner = calculateWinner(squares);

  return (
    <>
      <p className="container">XOX</p>
      <div className="board-container">
        {renderSquare()}
      </div>
      {winner && <p className='container'>{winner} kazandı!</p>}
    </>
  );
}

