export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';

import { clearErrors,
         receiveSignUpErrors,
         receiveLogInErrors,
         receiveLogOutErrors } from './error_actions';
import * as SessionAPIUtil from '../util/session_api_util';

export const logIn = user => dispatch => (
  SessionAPIUtil.logIn(user)
    .then( currentUser => dispatch(receiveCurrentUser(currentUser)),
    error => dispatch(receiveLogInErrors(error.responseJSON)))
    .then( () => dispatch(clearErrors()))
);

export const logOut = () => dispatch => (
  SessionAPIUtil.logOut()
    .then( currentUser => dispatch(receiveCurrentUser(null)),
    error => dispatch(receiveLogOutErrors(error.responseJSON)))
);

export const signUp = user => dispatch => (
  SessionAPIUtil.signUp(user)
    .then( currentUser => dispatch(receiveCurrentUser(currentUser)),
    error => dispatch(receiveSignUpErrors(error.responseJSON)))
    .then( () => dispatch(clearErrors()))
);

const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});
