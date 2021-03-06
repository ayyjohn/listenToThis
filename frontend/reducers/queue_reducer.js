import { CLEAR_QUEUE,
         POPULATE_QUEUE,
         UPDATE_ID,
         UPDATE_INDEX,
         UPDATE_PLAYING } from '../actions/queue_actions';

import { merge } from 'lodash';

const _defaultState = {
  tracks: [],
  index: -1,
  playing: true,
  id: -1
};

const QueueReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  let newState = merge({}, state);

  switch(action.type) {
    case CLEAR_QUEUE:
      newState = {
        tracks: [],
        index: null,
        playing: true
      };
      return newState;
    case POPULATE_QUEUE:
      newState.tracks = action.tracks;
      newState.index = action.index;
      return newState;
    case UPDATE_PLAYING:
      newState.playing = action.playing;
      return newState;
    case UPDATE_INDEX:
      newState.index = action.index;
      return newState;
    case UPDATE_ID:
      newState.id = action.id;
      return newState;
    default:
      return newState;
  }
};

export default QueueReducer;
