import {Board} from "../components/Board"
import { connect } from "react-redux"

const mapStateToProps = (state, ownProps) => {
  return {
    history: state.history,
    stepNumber: state.stepNumber,
    squares: ownProps.squares,
  };
}

export const BoardContainer = connect(mapStateToProps)(Board)