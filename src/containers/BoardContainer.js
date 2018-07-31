import React from "react";
import {Board} from "../components/Board"
import {store} from "../reducers/reducers"

export const BoardContainer = (props) => {

  const handleClick = (i) => {
    const state = store.getState();
    const history = state.history.slice(0, state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (current.winner || squares[i]) {
      return;
    }

    store.dispatch({type: 'MOVE', index: i});
  }

  return (
    <Board handleClick={handleClick} squares={props.squares} />
  );
}
