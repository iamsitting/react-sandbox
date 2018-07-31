import React from "react"
import {HistoryListContainer} from "../containers/HistoryListContainer"
import {BoardContainer} from "../containers/BoardContainer"
import {store} from "../reducers/reducers"

export const Game = (props) => {
  const state = store.getState();
  const history = state.history;
  const current = history[state.stepNumber];
  let status = current.winner ?
    "Winner: " + current.squares[current.winner[0]] :
    "Next player: " + (state.xIsNext ? "X" : "O");

  const toggleReverse = () => {
    store.dispatch({type: 'REVERSE'});
  }

  return (
    <div className="game">
      <div className="game-board">
        <BoardContainer squares={current.squares}/>
      </div>
      <div className="game-info">
        <div>{status}</div>
        <button onClick={toggleReverse}>Toggle List Order</button>
        <ol className={state.isReversed ? "column-reversed" : ""}>
          <HistoryListContainer
          history={history}
          stepNumber={state.stepNumber}
          />
        </ol>
      </div>
    </div>
  );
}
