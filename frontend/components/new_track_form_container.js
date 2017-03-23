import { connect } from 'react-redux';

import { createTrack } from '../actions/track_actions';
import { clearErrors } from '../actions/error_actions';
import NewTrackForm from './new_track_form';

const mapStateToProps = ({ session, errors, track }) => ({
  currentUser: session.currentUser,
  track: track,
  errors: errors.newTrack
});

const mapDispatchToProps = dispatch => ({
  createTrack: track => dispatch(createTrack(track)),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(NewTrackForm);
