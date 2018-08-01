import {fbDatabase}  from '../utils/firebase'
import uuid from 'uuid/v4'
/**
* ACTION TYPES
*/
export const GET_USERS = 'get users'
export const DELETE_USER = 'delete user'
export const CREATE_USER = 'create user'
export const MOVE = 'move'
export const JUMP = 'jump'
export const REVERSE = 'reverse'

/**
* FIREBASE CONSTANTS
*/
export const FB_CREATED = 'child_added'
export const FB_DELETED = 'child_removed'
export const FB_REF_ROOT = '/'
export const FB_REF_USERS = '/users/'

/**
* ACTION CREATORS
*/
export const getUsers = (users) => ({type: GET_USERS, users})
export const createUser = (user) => ({type: CREATE_USER, user})
export const deleteUser = (user) => ({type: DELETE_USER, user})

export const makeMove = (index) => ({type: MOVE, index})
export const jumpToMove = (index) => ({type: JUMP, index})
export const toggleReverse = (index) => ({type: REVERSE})

/**
* LISTENERS
*/
export const watchUserCreated = (dispatch) => {
  fbDatabase.ref(FB_REF_USERS).on(FB_CREATED, (snap) => {
    dispatch(createUser(snap.val()));
  });
}

export const watchUserDeleted = (dispatch) => {
  fbDatabase.ref(FB_REF_USERS).on(FB_DELETED, (snap) => {
    dispatch(deleteUser(snap.val()));
  });
}

/**
* THUNKS
*/
export const getUsersThunk = () => {
  return dispatch => {
    const users = [];
    fbDatabase.ref(FB_REF_USERS).once('value', snap => {
      snap.forEach(data => {
        let user = data.val();
        users.push(user)
      })
    }).then(() => dispatch(getUsers(users)))
  }
}

/**
* FIREBASE ACTIONS
*/
export const fbCreateUser = (username) => {
  const id = uuid();
  fbDatabase.ref(FB_REF_USERS + `${id}`).set({
    username, id
  });

}

export const fbDeleteUser = (id) => {
  fbDatabase.ref(FB_REF_USERS + `${id}`).remove()
}