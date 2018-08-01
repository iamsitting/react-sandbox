import { createStore } from 'redux';
import {calculateWinner} from "../utils/utils"

const PRELOAD = {
  history: [{
    squares: Array(9).fill(null),
    row: 0,
    col: 0,
    winner: null
  }],
  stepNumber: 0,
  xIsNext: true,
  isReversed: false
};

const reducer = (state, action) => {
  let nState = {};
  let history, stepNumber, xIsNext, isReversed;

  switch(action.type){
    case 'MOVE':
      let hist = state.history.slice(0, state.stepNumber + 1);
      let current = hist[hist.length - 1];
      let squares = current.squares.slice();
      squares[action.index] = state.xIsNext ? "X" : "O";
      let winner = calculateWinner(squares);

      history = hist.concat([{
        squares: squares,
        row: (action.index / 3 >>0) + 1,
        col: (action.index % 3) + 1,
        winner: winner
      }]);
      stepNumber = hist.length;
      xIsNext = !state.xIsNext;
      isReversed = state.isReversed;

      break;
    case 'JUMP':
      history = state.history;
      stepNumber = action.index;
      xIsNext = (action.index % 2) === 0;
      isReversed = state.isReversed;
      break;
    case 'REVERSE':
      history = state.history;
      stepNumber = state.stepNumber;
      xIsNext = state.xIsNext;
      isReversed = !state.isReversed;
      break;
    default:
      return {...state};
  }
  nState.history = history;
  nState.stepNumber = stepNumber;
  nState.xIsNext = xIsNext;
  nState.isReversed = isReversed;
  return nState;
}

export const store = createStore(reducer, PRELOAD);