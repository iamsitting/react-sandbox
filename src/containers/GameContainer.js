import React from "react"
import {Game} from "../components/Game"
import {calculateWinner} from "../utils/utils"
import store from "../reducers/reducers"

export class GameContainer extends React.Component {

  handleClick(i) {
    const state = store.getState()
    const history = state.history.slice(0, state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    const winner = calculateWinner(squares);
    if (winner || squares[i]) {
      return;
    }

    store.dispatch({type: 'MOVE', index: i});
  }

  jumpTo(step) { return store.dispatch({type: 'JUMP', index: step});}

  render() {
    const state = store.getState()
    const history = state.history;
    const current = history[state.stepNumber];
    const winner = calculateWinner(current.squares);
    let status = winner ?
      "Winner: " + current.squares[winner[0]] :
      "Next player: " + (state.xIsNext ? "X" : "O");

    return (
      <Game handleClick={this.handleClick.bind(this)}
      history={state.history}
      xIsNext={state.xIsNext}
      stepNumber={state.stepNumber}
      current={current}
      status={status}
      jumpTo={this.jumpTo.bind(this)}
      />
    );
  }
}
