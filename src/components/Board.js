import React from "react";
import {Square} from "./Square"

export const Board = (props) => {

  const renderSquare = (i) => <Square key={i} value={props.squares[i]} handleClick={() => props.handleClick(i)}/>

  const renderRow = (row, arr) => arr.map((k) => renderSquare((row+k) + (row*2)))

  const renderBoard = (arr) => arr.map((j) => <div key={j} className="board-row">{renderRow(j, arr)}</div>)

  const nToArray = (n) => [...Array(n).keys()]

  return (
    <React.Fragment>
      {renderBoard(nToArray(3))}
    </React.Fragment>
  );
}
