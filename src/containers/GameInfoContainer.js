import {GameInfo} from "../components/GameInfo"
import { connect } from "react-redux"
import {toggleReverse} from "../utils/actions"

const mapStateToProps = state => {
  return {
    history: state.history,
    stepNumber: state.stepNumber,
    xIsNext: state.xIsNext,
    isReversed: state.isReversed
  };
}

const mapDispatchToProps = dispatch => {
  return {
    toggleReverse: () => dispatch(toggleReverse())
  };
};
export const GameInfoContainer = connect(mapStateToProps, mapDispatchToProps)(GameInfo)