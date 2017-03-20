import { combineReducers } from 'redux';
import ErrorsReducer from './errors_reducer';
import SessionReducer from './session_reducer';
import TrackReducer from './track_reducer';
import TracksReducer from './tracks_reducer';
import UserReducer from './user_reducer';

const RootReducer = combineReducers({
  errors: ErrorsReducer,
  session: SessionReducer,
  track: TrackReducer,
  tracks: TracksReducer,
  user: UserReducer
});

export default RootReducer;
