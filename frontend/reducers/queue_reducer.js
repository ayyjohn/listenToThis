import { POPULATE_QUEUE,
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


// case SKIP_FORWARDS:
//   if (newState.index >= action.tracks.length) {
//     return newState;
//   }
//   else {
//     newState.index = newState.index + 1;
//   }
//   return newState;
// case SKIP_BACKWARDS:
//   if (newState.index === 0) {
//     return newState;
//   }
//   else {
//     newState.index = newState.index - 1;
//   }
//   return newState;
