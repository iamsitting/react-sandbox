import React from "react"
import PropTypes from 'prop-types'

export const Square = ({index, value, current, makeMove}) => {

  const winning = current.winner ? current.winner.includes(index) : null;

  const handleClick = (i) => {
    if (!(current.winnder || current.squares[i])){
      makeMove(i)
    }
  }

  return (
    <button
      className={"square " + (winning ? "winning" : "")} onClick={() => handleClick(index)}>
      {value}
    </button>
  );
}

Square.propTypes = {
  index: PropTypes.number,
  value: PropTypes.string,
  current: PropTypes.object,
  makeMove: PropTypes.func
};