import {HistoryList} from "../components/HistoryList"
import {jumpToMove} from "../utils/actions"
import { connect } from "react-redux"

const mapStateToProps = state => {
  return {
    history: state.history,
    stepNumber: state.stepNumber,
  };
}

const mapDispatchToProps = dispatch => {
  return {
    jumpTo: index => dispatch(jumpToMove(index))
  };
};

export const HistoryListContainer = connect(mapStateToProps, mapDispatchToProps)(HistoryList)