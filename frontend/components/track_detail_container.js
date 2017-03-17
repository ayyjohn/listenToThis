import { connect } from 'react-redux';

import { getTrack } from '../actions/track_actions';
import TrackDetail from './track_detail';

const mapStateToProps = ({ session, errors, track }) => ({
  currentUser: session.currentUser,
  errors: errors.getTrack,
  track: track
});

const mapDispatchToProps = dispatch => ({
  getTrack: id => dispatch(getTrack(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(TrackDetail);
