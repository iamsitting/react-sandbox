import React from "react";
import {Board} from "./Board";
import {HistoryList} from "../components/HistoryList"

export const Game = (props) => {
  return (
    <div className="game">
      <div className="game-board">
        <Board squares={props.current.squares} handleClick={props.handleClick}/>
      </div>
      <div className="game-info">
        <div>{props.status}</div>
        <ol>
          <HistoryList jumpTo={props.jumpTo}
          history={props.history}
          stepNumber={props.stepNumber}
          />
        </ol>
      </div>
    </div>
  );
}

