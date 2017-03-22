import { CLEAR_QUEUE,
         POPULATE_QUEUE,
         UPDATE_INDEX } from '../actions/queue_actions';

import { merge } from 'lodash';

const _defaultState = {
  tracks: [],
  index: 0
};

const QueueReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  let newState = merge({}, state);

  switch(action.type) {
    case CLEAR_QUEUE:
      newState = {
        tracks: [],
        index: 0
      };
      return newState;
    case POPULATE_QUEUE:
      newState.tracks = action.tracks;
      newState.index = action.index;
      return newState;
    case UPDATE_INDEX:
      newState.index = action.index;
      return newState;
    default:
      return newState;
  }
};

export default QueueReducer;
