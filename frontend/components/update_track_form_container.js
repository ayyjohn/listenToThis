import { connect } from 'react-redux';

import { updateTrack, getTrack, clearTrack } from '../actions/track_actions';
import UpdateTrackForm from './update_track_form';

const mapStateToProps = ({ session, errors, track }) => ({
  currentUser: session.currentUser,
  track: track,
  errors: errors.updateTrack
});

const mapDispatchToProps = dispatch => ({
  getTrack: id => dispatch(getTrack(id)),
  updateTrack: (track, id) => dispatch(updateTrack(track, id)),
  clearTrack: () => dispatch(clearTrack())
});

export default connect(mapStateToProps, mapDispatchToProps)(UpdateTrackForm);
