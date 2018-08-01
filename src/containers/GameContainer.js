import {Game} from "../components/Game"
import { connect } from "react-redux"

const mapStateToProps = state => {
  return {
    history: state.history,
    stepNumber: state.stepNumber,
  };
}

export const GameContainer = connect(mapStateToProps)(Game)