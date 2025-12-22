import "./App.css";
import { useState } from "react";
import Board from "./Components/Board";

function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [winner, setWinner] = useState(null);

  // Resets the board to its original parameters
  const resetBoard = () => {
    setBoard(Array(9).fill(null));
    setCurrentPlayer("X");
    setWinner(null);
  };

  return (
    <div className="App">
      <h1>Tic Tac Toe</h1>

      {/* Display dynamically if theres a winner or not */}
      {winner && (
        <h2 className="status">
          {winner === "draw" ? "It's a Draw!" : `Winner: ${winner}`}
        </h2>
      )}

      {!winner && <h2 className="status">Current Player: {currentPlayer}</h2>}

      <Board
        board={board}
        setBoard={setBoard}
        currentPlayer={currentPlayer}
        setCurrentPlayer={setCurrentPlayer}
        winner={winner}
        setWinner={setWinner}
      />

      <button onClick={resetBoard} className="reset">
        Restart Game
      </button>
    </div>
  );
}

export default App;
