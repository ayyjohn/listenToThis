import { connect } from 'react-redux';

import TrackIndex from './track_index';
import { getTracks } from '../actions/track_actions';
import { populateQueue, updateId, updatePlaying } from '../actions/queue_actions';

const mapStateToProps = ({ tracks, queue }) => ({
  tracks: tracks,
  queue: queue
});

const mapDispatchToProps = dispatch => ({
  getTracks: searchParam => dispatch(getTracks(searchParam)),
  populateQueue: (queue, index) => dispatch(populateQueue(queue, index)),
  updateId: id => dispatch(updateId(id)),
  updatePlaying: playing => dispatch(updatePlaying(playing))
});

export default connect(mapStateToProps, mapDispatchToProps)(TrackIndex);
