import { merge } from 'lodash';
import { RECEIVE_TRACK, CLEAR_TRACK } from '../actions/track_actions';
import { RECEIVE_COMMENT } from '../actions/comment_actions';

const TrackReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);

  switch(action.type) {
    case RECEIVE_TRACK:
      newState = merge({}, newState, action.track);
      return newState;
    case RECEIVE_COMMENT:
      newState.comments = newState.comments.concat(action.comment.comment);
      return newState;
    case CLEAR_TRACK:
      return {};
    default:
      return newState;
  }
};

export default TrackReducer;
