import React, { useState } from "react";

// Define the type for Square props
interface SquareProps {
  value: string | null; // Value of the square, can be "X", "O", or null (empty)
  onSquareClick: () => void; // Function to call when the square is clicked
}

// Square component
function Square({ value, onSquareClick }: SquareProps) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value} {/* Display the value of the square */}
    </button>
  );
}

// Define the type for Board props
interface BoardProps {
  xIsNext: boolean; // Indicates if it's X's turn
  squares: Array<string | null>; // Current state of the squares in the game
  onPlay: (nextSquares: Array<string | null>) => void; // Function to update the squares
}

// Board component
function Board({ xIsNext, squares, onPlay }: BoardProps) {
  // Function to handle click events on squares
  function handleClick(i: number) {
    // If there's already a winner or the square is filled, do nothing
    if (calculateWinner(squares) || squares[i]) {
      return;
    }

    // Create a copy of the current squares array
    const nextSquares = squares.slice();

    // Update the square with "X" or "O" based on whose turn it is
    nextSquares[i] = xIsNext ? "X" : "O";

    // Call the onPlay function to update the state in the parent component
    onPlay(nextSquares);
  }

  // Calculate the winner based on current squares
  const winner = calculateWinner(squares);

  // Determine the status message to display
  const status = winner
    ? "Winner: " + winner // If there's a winner, show who it is
    : "Next player: " + (xIsNext ? "X" : "O"); // Otherwise, show whose turn it is

  return (
    <>
      <div className="status">{status}</div> {/* Display status message */}
      <div className="board-row">
        {/* Render squares for each position in the first row */}
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        {/* Render squares for each position in the second row */}
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        {/* Render squares for each position in the third row */}
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
}

// Game component which holds the overall game state and logic
export default function Game() {
  // History of all moves made in the game (array of square states)
  const [history, setHistory] = useState<Array<Array<string | null>>>([
    Array(9).fill(null), // Initial state with all squares empty
  ]);

  const [currentMove, setCurrentMove] = useState<number>(0); // Track which move we're currently at

  const currentSquares = history[currentMove]; // Get current squares based on current move

  // Function to update the game state when a player makes a move
  function handlePlay(nextSquares: Array<string | null>) {
    // Create a new history array with the new move added
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];

    setHistory(nextHistory); // Update history state with new moves
    setCurrentMove(nextHistory.length - 1); // Update current move to latest move
  }

  // Function to jump back to a specific move in history
  function jumpTo(nextMove: number) {
    setCurrentMove(nextMove); // Update current move to specified move
  }

  // Generate a list of moves for displaying history of moves made in the game
  const moves = history.map((squares, move) => {
    let description;

    if (move > 0)
      description = "go to #" + move; // Description for moves after start
    else description = "go to start"; // Description for first move

    return (
      <li key={move}>
        {/* Button to jump back to that move */}
        <button onClick={() => jumpTo(move)}> {description}</button>
      </li>
    );
  });

  return (
    <div className="game">
      <div className="game-board">
        {/* Render Board component with current state and turn information */}
        <Board
          xIsNext={currentMove % 2 === 0}
          squares={currentSquares}
          onPlay={handlePlay}
        />
      </div>
      <div className="game-info">
        {/* Display list of moves made during the game */}
        <ol>{moves}</ol>
      </div>
    </div>
  );
}

// Function to calculate the winner based on current square states
function calculateWinner(squares: Array<string | null>): string | null {
  const lines = [
    [0, 1, 2], // Winning combinations for rows and columns and diagonals
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i]; // Destructure winning line indices

    // Check if there's a winner in this line combination
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a]; // Return the winner ("X" or "O")
    }
  }

  return null; // Return null if there's no winner yet
}
