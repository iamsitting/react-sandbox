import React from "react"
import {HistoryListContainer} from "../containers/HistoryListContainer"
import PropTypes from 'prop-types'

export const GameInfo = ({...props}) => {

  const current = props.history[props.stepNumber];
  const status = current.winner ?
    "Winner: " + current.squares[current.winner[0]] :
    "Next player: " + (props.xIsNext ? "X" : "O");

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