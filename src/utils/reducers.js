import { createStore, applyMiddleware } from "redux"
import {calculateWinner} from "../utils/utils"
import thunkMiddleware from "redux-thunk"
import {MOVE, JUMP, REVERSE, GET_USERS, CREATE_USER, DELETE_USER, CHOOSE_PLAYER} from "../utils/actions"

const PRELOAD = {
  history: [{
    squares: Array(9).fill(null),
    row: 0,
    col: 0,
    winner: null
  }],
  stepNumber: 0,
  xIsNext: true,
  isReversed: false,
  users: [],
  players: Array(2).fill(null),
};

const reducer = (state, action) => {
  let nState = {};
  const findFirstNull = (el) => el === null
  const pl = state.players.findIndex(findFirstNull);

  switch(action.type){
    case MOVE:
      if (pl >= 0) return state;
      let history = state.history.slice(0, state.stepNumber + 1);
      let current = history[history.length - 1];
      let squares = current.squares.slice();
      squares[action.index] = state.xIsNext ? "X" : "O";

      nState = {...state};
      nState.history = history.concat([{
        squares: squares,
        row: (action.index / 3 >> 0) + 1,
        col: (action.index % 3) + 1,
        winner: calculateWinner(squares)
      }]);
      nState.stepNumber = history.length;
      nState.xIsNext = !state.xIsNext;
      return nState;
    case JUMP:
      nState = {...state};
      nState.stepNumber = action.index;
      nState.xIsNext = (action.index % 2) === 0;
      return nState;
    case CHOOSE_PLAYER:
      nState = {...state};
      if (pl >= 0){
        let x = nState.players.slice();
        x[pl] = action.player;
        nState.players = x;
      }
      return nState;
    case REVERSE:
      nState = {...state};
      nState.isReversed = !state.isReversed;
      return nState;
    case GET_USERS:
      nState = {...state};
      nState.users = action.users;
      return nState;
    case CREATE_USER:
      nState = {...state};
      nState.users = [...state.users, action.user];
      return nState;
    case DELETE_USER:
      nState = {...state};
      nState.users = state.users.filter(u => u.id !== action.user.id);
      return nState;
    default:
      return {...state};
  }
}

export const store = createStore(reducer, PRELOAD, applyMiddleware(thunkMiddleware));
