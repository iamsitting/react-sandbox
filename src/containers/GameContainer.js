import React from "react";
import Game from "../components/Game";
import calculateWinner from "../utils/utils"

class GameContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [{
        squares: Array(9).fill(null),
        row: 0,
        col: 0,
      }],
      xIsNext: true,
      stepNumber: 0,
      winningSquares: Array(3).fill(null),
    };
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) === 0,
    });
  }

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    const row = (i / 3 >> 0) + 1;
    const col = (i % 3) + 1;
    const winner = calculateWinner(squares);
    if (winner || squares[i]) {
      return;
    }

    squares[i] = this.state.xIsNext ? "X" : "O";
    this.setState({
      history: history.concat([{
        squares: squares,
        row: row,
        col: col,
      }]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext,
      winningSquares: winner ? winner : Array(3).fill(null),
    });
  }

  render() {
    return (
      <Game onClick={(i) => this.handleClick(i)}
      history={this.state.history}
      xIsNext={this.state.xIsNext}
      stepNumber={this.state.stepNumber}
      jumpTo={this.jumpTo}
      />
    );
  }
}

export default GameContainer