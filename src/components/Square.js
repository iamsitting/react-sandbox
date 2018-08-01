import React from "react"
import PropTypes from 'prop-types'

export const Square = ({index, value, latest, makeMove}) => {

  const winning = latest.winner ? latest.winner.includes(index) : null;

  const handleClick = (i) => {
    if (!(latest.winner || latest.squares[i])){
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
  latest: PropTypes.object,
  makeMove: PropTypes.func
};