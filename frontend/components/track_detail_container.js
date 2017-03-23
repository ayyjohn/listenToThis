import { connect } from 'react-redux';

import { getTrack, removeTrack, clearTrack } from '../actions/track_actions';
import { populateQueue } from '../actions/queue_actions';

import TrackDetail from './track_detail';

const mapStateToProps = ({ session, errors, track }) => ({
  currentUser: session.currentUser,
  errors: errors.getTrack,
  track: track
});

const mapDispatchToProps = dispatch => ({
  getTrack: id => dispatch(getTrack(id)),
  removeTrack: id => dispatch(removeTrack(id)),
  clearTrack: () => dispatch(clearTrack()),
  populateQueue: (queue, index) => dispatch(populateQueue(queue, index))
});

export default connect(mapStateToProps, mapDispatchToProps)(TrackDetail);
