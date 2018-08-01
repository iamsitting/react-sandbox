import {UserForm} from "../components/UserForm"
import { connect } from "react-redux"
import {getUsersThunk} from "../utils/actions"
import {fbCreateUser, fbDeleteUser, watchUserCreated, watchUserDeleted, choosePlayer}  from '../utils/actions'

const mapStateToProps = state => {
  return {
    users: state.users,
    players: state.players
  };
}

const mapDispatchToProps = dispatch => {
  dispatch(getUsersThunk())
  watchUserCreated(dispatch)
  watchUserDeleted(dispatch)
  return {
    createUser: fbCreateUser,
    deleteUser: fbDeleteUser,
    chooseThisPlayer: player => dispatch(choosePlayer(player))
  };
}

export const UserFormContainer = connect(mapStateToProps, mapDispatchToProps)(UserForm)
