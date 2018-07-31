import React from "react";

export const HistoryList = (props) => props.history.map((step, move) => {
  const bold = props.stepNumber === move;
  const loc = " (" + step.col + "," + step.row + ")";
  const desc = move ?
    "Go to move #" + move + loc :
    "Go to game start";
  return (
    <li key={move}>
      <button onClick={() => props.jumpTo(move)} className={bold ? "bold" : ""}>{desc}</button>
    </li>
  );
});
