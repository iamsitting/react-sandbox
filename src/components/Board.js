import React from "react"
import {SquareContainer} from "../containers/SquareContainer"
import PropTypes from 'prop-types'

export const Board = ({history, stepNumber, squares}) => {
  const hist = history.slice(0, stepNumber + 1);
  const current = hist[hist.length - 1];

  const renderSquare = (index) => <SquareContainer current={current} index={index} key={index} value={squares[index]}/>

  const renderRow = (row, arr) => arr.map((k) => renderSquare((row+k) + (row*2)))

  const renderBoard = (arr) => arr.map((j) => <div key={j} className="board-row">{renderRow(j, arr)}</div>)

  const nToArray = (n) => [...Array(n).keys()]

  return (
    <React.Fragment>
      {renderBoard(nToArray(3))}
    </React.Fragment>
  );
}


Board.propTypes = {
  squares: PropTypes.array,
  history: PropTypes.array,
  stepNumber: PropTypes.number,
};