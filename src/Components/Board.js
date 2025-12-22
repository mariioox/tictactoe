import React from "react";
import Tile from "./Tile";
import { checkWin } from "./checkWin";

function Board({
  board,
  setBoard,
  currentPlayer,
  setCurrentPlayer,
  winner,
  setWinner,
}) {
  const handleClick = (index) => {
    // Checks if the particular tile is already filled or game has been won
    if (board[index] || winner) return;

    // If its null(or no winner), create a temp. board a with all the former parameters and update the new tile
    const newBoard = [...board];
    newBoard[index] = currentPlayer;

    // Update the old board
    setBoard(newBoard);

    // Gets winner from checkWin function
    const gameResult = checkWin(newBoard);
    if (gameResult) {
      setWinner(gameResult);
      return;
    }

    // Checks if all the tiles are filled (not null)
    const isDraw = newBoard.every((tile) => tile !== null);
    if (isDraw) {
      setWinner("draw");
      return;
    }

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
