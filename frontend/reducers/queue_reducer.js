import { POPULATE_QUEUE } from '../actions/queue_actions';
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
    default:
      return newState;
  }
};

export default QueueReducer;
