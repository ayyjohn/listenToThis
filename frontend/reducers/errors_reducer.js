import { merge } from 'lodash';

import { CLEAR_ERRORS,
         RECEIVE_GET_TRACK_ERRORS,
         RECEIVE_LOG_IN_ERRORS,
         RECEIVE_LOG_OUT_ERRORS,
         RECEIVE_NEW_TRACK_ERRORS,
         RECEIVE_SIGN_UP_ERRORS,
         RECEIVE_UPDATE_TRACK_ERRORS } from '../actions/error_actions';

// TODO: implement metaprogramming to make the errors reducer cleaner
// TODO: make the default state for the errors reducer cleaner

const noErrors = {
  getTrack: [],
  logIn: [],
  logOut: [],
  newTrack: [],
  signUp: [],
  updateTrack: []
};

const ErrorsReducer = (state = noErrors, action) => {
  Object.freeze(state);
  let newState = merge({}, state);

  switch (action.type) {
    case RECEIVE_GET_TRACK_ERRORS:
      newState.getTrack = action.errors;
      return newState;
    case RECEIVE_LOG_IN_ERRORS:
      newState.logIn = action.errors;
      return newState;
    case RECEIVE_LOG_OUT_ERRORS:
      newState.logOut = action.errors;
      return newState;
    case RECEIVE_SIGN_UP_ERRORS:
      newState.signUp = action.errors;
      return newState;
    case RECEIVE_NEW_TRACK_ERRORS:
      newState.newTrack = action.errors;
      return newState;
    case RECEIVE_UPDATE_TRACK_ERRORS:
      newState.updateTrack = action.errors;
      return newState;
    case CLEAR_ERRORS:
      return noErrors;
    default:
      return state;
  }
};

export default ErrorsReducer;
