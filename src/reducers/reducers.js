import { createStore } from 'redux';
import { PRELOAD } from '../utils/utils'

const reducer = (state, action) => {
  let nState = {};

  switch(action.type){
    case 'MOVE':
      const history = state.history.slice(0, state.stepNumber + 1);
      const current = history[history.length - 1];
      const squares = current.squares.slice();
      squares[action.index] = state.xIsNext ? "X" : "O";

      nState = {
        history: history.concat([{
          squares: squares,
          row: (action.index / 3 >> 0) + 1,
          col: (action.index % 3) + 1
        }]),
        stepNumber: history.length,
        xIsNext: !state.xIsNext
      }
      return nState
    case 'JUMP':
      nState = {
        history: state.history,
        stepNumber: action.index,
        xIsNext: (action.index % 2) === 0
      }
      return nState
    default:
      return {...state};
  }
}

const store = createStore(reducer, PRELOAD);

export default store
