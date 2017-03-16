import { merge } from 'lodash';
import { RECEIVE_TRACK } from '../actions/track_actions';

const TrackReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);

  switch(action.type) {
    case RECEIVE_TRACK:
      newState = merge({}, newState, action.track);
      return newState;
    default:
      return newState;
  }
};

export default TrackReducer;
