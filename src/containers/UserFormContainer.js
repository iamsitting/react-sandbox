import {UserForm} from "../components/UserForm"
import { connect } from "react-redux"
import {getUsersThunk} from "../utils/actions"
import {fbCreateUser, fbDeleteUser, watchUserCreated, watchUserDeleted}  from '../utils/actions'

const mapStateToProps = state => {
  return {
    users: state.users
  };
}

const mapDispatch = dispatch => {
  dispatch(getUsersThunk())
  watchUserCreated(dispatch)
  watchUserDeleted(dispatch)
  return {
    createUser: fbCreateUser,
    deleteUser: fbDeleteUser
  }
}

export const UserFormContainer = connect(mapStateToProps, mapDispatch)(UserForm)
