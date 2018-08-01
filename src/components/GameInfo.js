import React from "react"
import {HistoryListContainer} from "../containers/HistoryListContainer"
import PropTypes from 'prop-types'

export const GameInfo = ({...props}) => {

  const current = props.history[props.stepNumber];
  let status = "";

  if (current.winner){
    status = "Winner: " + current.squares[current.winner[0]];
  } else if (current.squares.includes(null)) {
    status = "Next player: " + (props.xIsNext ? "X" : "O");
  } else {
    status = "THE GAME IS A DRAW!";
  }

  return (
    <React.Fragment>
      <div>{status}</div>
      <button onClick={props.toggleReverse} >Toggle List Order</button>
      <ol className={props.isReversed ? "column-reversed" : ""}>
        <HistoryListContainer />
      </ol>
    </React.Fragment>
  );
}

GameInfo.propTypes = {
  history: PropTypes.array,
  stepNumber: PropTypes.number,
  xIsNext: PropTypes.bool,
  isReversed: PropTypes.bool,
  toggleReverse: PropTypes.func,
};