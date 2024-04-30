// Board.jsx
import React from "react";
import "./styles.css";
import Box from "./Box";

const Board = ({ board, onClickBox }) => (
  <div className="board">
    {board.map((value, index) => (
      <Box
        key={index}
        value={value}
        onClick={() => value === null && onClickBox(index)}
      />
    ))}
  </div>
);

export default Board;
