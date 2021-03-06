import { RECEIVE_TRACKS, CLEAR_TRACKS } from '../actions/track_actions';
import { RECEIVE_COMMENT } from '../actions/comment_actions';

const TracksReducer = (state = [], action) => {
  Object.freeze(state);
  let newState = [].concat(state);

  switch(action.type) {
    case RECEIVE_TRACKS:
      newState = action.tracks;
      return newState;
    case CLEAR_TRACKS:
      newState = [];
      return newState;
    default:
      return newState;
  }
};

export default TracksReducer;
