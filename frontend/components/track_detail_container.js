import { connect } from 'react-redux';

import { getTrack, removeTrack, clearTrack } from '../actions/track_actions';
import { populateQueue, updatePlaying, updateId } from '../actions/queue_actions';

import TrackDetail from './track_detail';

const mapStateToProps = ({ session, errors, track, queue }) => ({
  currentUser: session.currentUser,
  errors: errors.getTrack,
  track: track,
  queue: queue
});

const mapDispatchToProps = dispatch => ({
  getTrack: id => dispatch(getTrack(id)),
  removeTrack: id => dispatch(removeTrack(id)),
  clearTrack: () => dispatch(clearTrack()),
  populateQueue: (queue, index) => dispatch(populateQueue(queue, index)),
  updateId: id => dispatch(updateId(id)),
  updatePlaying: playing => dispatch(updatePlaying(playing))
});

export default connect(mapStateToProps, mapDispatchToProps)(TrackDetail);
