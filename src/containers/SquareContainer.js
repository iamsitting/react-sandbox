import {Square} from "../components/Square"
import {makeMove} from "../utils/actions"
import { connect } from "react-redux"

const mapStateToProps = (state, ownProps) => {
  return {
    history: state.history,
    stepNumber: state.stepNumber,
    index: ownProps.index,
    value: ownProps.value,
    latest: ownProps.latest,
  };
}

const mapDispatchToProps = dispatch => {
  return {
    makeMove: (i) => dispatch(makeMove(i))
  };
}
export const SquareContainer = connect(mapStateToProps, mapDispatchToProps)(Square)