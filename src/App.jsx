import { useState } from "react";
import "./App.css";
import Board from "./components/Board";

function App() {
  const WIN_CONDITIONS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xTurn, setXTurn] = useState(true);
  const [scores, setScores] = useState({ xScore: 0, oScore: 0 });
  const [gameOver, setGameOver] = useState(false);

  const handleBoxClick = (index) => {
    if (!board[index] && !gameOver) {
      const updatedBoard = board.map((value, boxIndex) => {
        if (index === boxIndex) {
          return xTurn ? "X" : "O";
        } else {
          return value;
        }
      });

      const winner = checkWinner(updatedBoard);

      if (winner) {
        setScores((prevScores) => ({
          ...prevScores,
          [winner === "X" ? "xScore" : "oScore"]: prevScores[winner === "X" ? "xScore" : "oScore"] + 1
        }));
        setGameOver(true);
      }

      setBoard(updatedBoard);
      setXTurn(!xTurn);
    }
  };

  const checkWinner = (board) => {
    for (let idx = 0; idx < WIN_CONDITIONS.length; idx++) {
      const [a, b, c] = WIN_CONDITIONS[idx];
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }
    return null;
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setGameOver(false);
  };

  return (
    <div className="App">
      <h2>Score: X - {scores.xScore}, O - {scores.oScore}</h2>
      <Board board={board} onClickBox={handleBoxClick} />
      {gameOver && <button onClick={resetGame}>Reset Game</button>}
      {gameOver && <h2>{checkWinner(board)} wins!</h2>}
    </div>
  );
}

export default App;
