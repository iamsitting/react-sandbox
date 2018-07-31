import React from "react";
import Board from "./Board";
import HistoryList from "./HistoryList"
import calculateWinner from "../utils/utils"

class Game extends React.Component {
  render(){
  const history = this.props.history;
  const current = history[this.props.stepNumber];
  const winner = calculateWinner(current.squares);
  let status;

  const moves = history.map((step, move) => {
    const bold = this.props.stepNumber === move;
    const loc = " (" + step.col + "," + step.row + ")";
    const desc = move ?
      "Go to move #" + move + loc:
      "Go to game start";
    return (
      <HistoryList key={move} move={move} bold={bold} desc={desc} onClick={(move) => this.props.jumpTo(move)}/>
    );
  });

  if (winner) {
    status = "Winner: " + current.squares[winner[0]];
  } else {
    status = "Next player: " + (this.props.xIsNext ? "X" : "O");
  }
  return (
    <div className="game">
      <div className="game-board">
        <Board squares={current.squares} onClick={this.props.onClick}/>
      </div>
      <div className="game-info">
        <div>{status}</div>
        <ol>{moves}</ol>
      </div>
    </div>
  );
  }
}

export default Game
