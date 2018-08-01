import React from "react"
import {BoardContainer} from "../containers/BoardContainer"
import {GameInfoContainer} from "../containers/GameInfoContainer"
import PropTypes from 'prop-types'

export const Game = ({history, stepNumber}) => {

  const current = history[stepNumber];

  return (
    <div className="game">
      <div className="game-board">
        <BoardContainer squares={current.squares}/>
      </div>
      <div className="game-info">
        <GameInfoContainer />
      </div>
    </div>
  );
}

Game.propTypes = {
  history: PropTypes.array,
  stepNumber: PropTypes.number,
};
