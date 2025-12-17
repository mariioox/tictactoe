import React from "react";
import Tile from "./Tile";

function Board({ board, setBoard, currentPlayer, setCurrentPlayer }) {
  const handleClick = (index) => {
    // Checks if the particular tile is null
    if (board[index] !== null) return;

    // If its null, create a temp. board a with all the former parameters and update the new tile
    const newBoard = [...board];
    newBoard[index] = currentPlayer;

    // Updatae the old board
    setBoard(newBoard);

    // Toggle current player
    setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
  };

  return (
    <div className="board">
      {board.map((value, index) => (
        <Tile key={index} value={value} onClick={() => handleClick(index)} />
      ))}
    </div>
  );
}

export default Board;
