import React from "react"
import {Game} from "../components/Game"
import {calculateWinner} from "../utils/utils"
import store from "../reducers/reducers"

export class GameContainer extends React.Component {

  render() {
    const state = store.getState()
    const history = state.history;
    const current = history[state.stepNumber];
    const winner = calculateWinner(current.squares);
    let status = winner ?
      "Winner: " + current.squares[winner[0]] :
      "Next player: " + (state.xIsNext ? "X" : "O");

    return (
      <Game history={state.history}
      xIsNext={state.xIsNext}
      stepNumber={state.stepNumber}
      current={current}
      status={status}
      />
    );
  }
}
