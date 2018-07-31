import React from "react"
import {store} from "../reducers/reducers"

export const Square = (props) => {
  const state = store.getState();
  const history = state.history;
  const current = history[state.stepNumber];
  const winner = current.winner;
  const winning = winner ? winner.includes(props.i) : null;
  return (
    <button
      className={"square " + (winning ? "winning" : "")} onClick={props.handleClick}>
      {props.value}
    </button>
  );
}
