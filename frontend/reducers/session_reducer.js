import merge from 'lodash/merge';

import { RECEIVE_ERRORS, RECEIVE_CURRENT_USER } from '../actions/session_actions';

const _nullUser = {
  currentUser: null,
  errors: []
};

const SessionReducer = (state = _nullUser, action) => {
  Object.freeze(state);
  let newState = merge({}, state);

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return (newState = merge({}, state, action.currentUser));
    default:
      return state;
  }
};
