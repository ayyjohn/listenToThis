import * as UserAPIUtil from '../util/user_api_util';
import {
  clearErrors,
  receiveUpdateUserErrors } from './error_actions';

export const RECEIVE_USER = 'RECEIVE_USER';

export const getUser = id => dispatch => (
  UserAPIUtil.getUser(id)
    .then( user => dispatch(receiveUser(user)))
);

export const updateUser = (user, id) => dispatch => (
  UserAPIUtil.updateUser(user, id)
    .then( updatedUser => dispatch(receiveUser(updatedUser)))
);

export const receiveUser = user => ({
  type: RECEIVE_USER,
  user
});
