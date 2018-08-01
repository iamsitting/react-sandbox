import React from "react"

export const Square = ({...props}) => {
  const handleClick = (i) => {
    const history = props.history.slice(0, props.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (current.winner || squares[i]) {
      return;
    }

    props.makeMove(i);
  }

  const history = props.history;
  const current = history[props.stepNumber];
  const winner = current.winner;
  const winning = winner ? winner.includes(props.index) : null;
  return (
    <button
      className={"square " + (winning ? "winning" : "")} onClick={() => handleClick(props.index)}>
      {props.value}
    </button>
  );
}
