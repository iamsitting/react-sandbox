import React from "react";
import {Square} from "./Square"

export const Board = (props) => {

  const makeRows = () => {
    const renderSquare = (i) => <Square key={i} value={props.squares[i]} handleClick={() => props.handleClick(i)}/>
    let counter = [0, 1, 2];
    let rows = counter.map((j) => {
      let sqs = counter.map((k) => renderSquare((j+k) + (j*2)))
      return <div key={j} className="board-row">{sqs}</div>;
    });
    return rows;
  };

  return (
    <React.Fragment>
      {makeRows()}
    </React.Fragment>
  );
}
