import { RECEIVE_TRACK,
         RECEIVE_TRACKS } from '../actions/track_actions';

const TracksReducer = (state = [], action) => {
  Object.freeze(state);
  let newState = [].concat(state);

  switch(action.type) {
    case RECEIVE_TRACKS:
      newState = action.tracks;
      return newState;
    case RECEIVE_TRACK:
      newState = newState.concat(action.track);
      return newState;
    default:
      return newState;
  }
};

export default TracksReducer;