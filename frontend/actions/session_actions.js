export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_SIGN_UP_ERRORS = 'RECEIVE_SIGN_UP_ERRORS';
export const RECEIVE_LOG_IN_ERRORS = 'RECEIVE_LOG_IN_ERRORS';
export const RECEIVE_LOG_OUT_ERRORS = 'RECEIVE_LOG_OUT_ERRORS';

import * as SessionAPIUtil from '../util/session_api_util';

export const logIn = user => dispatch => (
  SessionAPIUtil.logIn(user)
    .then( currentUser => dispatch(receiveCurrentUser(currentUser)),
    error => dispatch(receiveLogInErrors(error.responseJSON)))
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
);

const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

const receiveSignUpErrors = errors => ({
  type: RECEIVE_SIGN_UP_ERRORS,
  errors
});

const receiveLogInErrors = errors => ({
  type: RECEIVE_LOG_IN_ERRORS,
  errors
});

const receiveLogOutErrors = errors => ({
  type: RECEIVE_LOG_OUT_ERRORS,
  errors
});
