import { merge } from 'lodash';
import { RECEIVE_USER, CLEAR_USER } from '../actions/user_actions';

const UserReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);

  switch(action.type) {
    case RECEIVE_USER:
      newState = merge({}, newState, action.user);
      return newState;
    case CLEAR_USER:
      newState = {};
      return newState;
    default:
      return newState;
  }
};

export default UserReducer;
