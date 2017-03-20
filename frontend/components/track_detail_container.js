import { connect } from 'react-redux';

import { getTrack, removeTrack } from '../actions/track_actions';
import TrackDetail from './track_detail';

const mapStateToProps = ({ session, errors, track }) => ({
  currentUser: session.currentUser,
  errors: errors.getTrack,
  track: track
});

const mapDispatchToProps = dispatch => ({
  getTrack: id => dispatch(getTrack(id)),
  removeTrack: id => dispatch(removeTrack(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(TrackDetail);
