import React from "react"
import {BoardContainer} from "../containers/BoardContainer"
import {GameInfoContainer} from "../containers/GameInfoContainer"

export const Game = () => {

  return (
    <div className="game">
      <div className="game-board">
        <BoardContainer />
      </div>
      <div className="game-info">
        <GameInfoContainer />
      </div>
    </div>
  );
}
