import React from "react";
import {SquareContainer} from "../containers/SquareContainer"

export const Board = ({squares}) => {

  const renderSquare = (index) => <SquareContainer index={index} key={index} value={squares[index]}/>

  const renderRow = (row, arr) => arr.map((k) => renderSquare((row+k) + (row*2)))

  const renderBoard = (arr) => arr.map((j) => <div key={j} className="board-row">{renderRow(j, arr)}</div>)

  const nToArray = (n) => [...Array(n).keys()]

  return (
    <React.Fragment>
      {renderBoard(nToArray(3))}
    </React.Fragment>
  );
}
