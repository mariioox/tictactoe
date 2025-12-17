import "./App.css";
import { useState } from "react";
import Board from "./Components/Board";

function App() {
  // Create an empty array with 9 null values
  const [board, setBoard] = useState(Array(9).fill(null));

  // Set default current player to X
  const [currentPlayer, setCurrentPlayer] = useState("X");

  return (
    <div className="App">
      <h1>Tic tac toe</h1>
      <Board
        board={board}
        setBoard={setBoard}
        currentPlayer={currentPlayer}
        setCurrentPlayer={setCurrentPlayer}
      />
    </div>
  );
}

export default App;
