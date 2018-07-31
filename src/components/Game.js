import React from "react"
import {HistoryListContainer} from "../containers/HistoryListContainer"
import {BoardContainer} from "../containers/BoardContainer"

export const Game = (props) => {
  return (
    <div className="game">
      <div className="game-board">
        <BoardContainer squares={props.current.squares}/>
      </div>
      <div className="game-info">
        <div>{props.status}</div>
        <ol>
          <HistoryListContainer
          history={props.history}
          stepNumber={props.stepNumber}
          />
        </ol>
      </div>
    </div>
  );
}

