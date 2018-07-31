import React from "react";
import store from "../reducers/reducers"
import {HistoryList} from "../components/HistoryList"

export const HistoryListContainer = (props) => props.history.map((step, move) => {

  const jumpTo = (index) => store.dispatch({type: 'JUMP', index: index})

  const bold = props.stepNumber === move;
  const loc = " (" + step.col + "," + step.row + ")";
  const desc = move ?
    "Go to move #" + move + loc :
    "Go to game start";

  return (
    <HistoryList description={desc}
    move={move}
    bold={bold}
    jumpTo={() => jumpTo(move)}
    />
  );
});
