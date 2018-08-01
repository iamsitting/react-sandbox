import React from "react"
import PropTypes from 'prop-types'

export const HistoryList = ({history, stepNumber, jumpTo}) => history.map((step, move) => {

  const bold = stepNumber === move;
  const loc = " (" + step.col + "," + step.row + ")";
  const desc = move ?
    "Go to move #" + move + loc :
    "Go to game start";

  return (
    <li key={move}>
      <button onClick={() => jumpTo(move)} className={bold ? "bold" : ""}>{desc}</button>
    </li>
  );
});

HistoryList.propTypes = {
  history: PropTypes.array,
  stepNumber: PropTypes.number,
  jumpTo: PropTypes.func,
};