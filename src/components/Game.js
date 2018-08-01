import React from "react"
import {BoardContainer} from "../containers/BoardContainer"
import {GameInfoContainer} from "../containers/GameInfoContainer"
import {UserFormContainer} from "../containers/UserFormContainer"

export const Game = ({...props}) => {

  return (
    <div className="game">
      <div className="game-board">
        <BoardContainer />
      </div>
      <div className="game-info">
        <GameInfoContainer />
      </div>
      <div>
        <UserFormContainer />
      </div>
    </div>
  );
}
