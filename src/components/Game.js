import React from "react"
import {BoardContainer} from "../containers/BoardContainer"
import {GameInfoContainer} from "../containers/GameInfoContainer"
import {UserFormContainer} from "../containers/UserFormContainer"

export const Game = ({...props}) => {

  return (
    <div className="game">
      <div className="game-board mui-col-md-2 mui-col-xs-6">
        <BoardContainer />
      </div>
      <div className="game-info mui-col-md-4">
        <GameInfoContainer />
      </div>
      <div>
        <UserFormContainer />
      </div>
    </div>
  );
}
