export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

import * as SessionAPIUtil from '../util/session_api_util';

export const logIn = user => dispatch => (
  SessionAPIUtil.logIn(user)
    .then( currentUser => dispatch(receiveCurrentUser(currentUser)),
    error => dispatch(receiveErrors(error.responseJSON)))
);

export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});
