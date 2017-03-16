import { connect } from 'react-redux';

import { createTrack } from '../actions/track_actions';
import NewTrackForm from './new_track_form';

const mapStateToProps = ({ session, errors, track }) => ({
  currentUser: session.currentUser,
  errors: errors.newTrack,
});

const mapDispatchToProps = dispatch => ({
  createTrack: track => dispatch(createTrack(track))
});

export default connect(mapStateToProps, mapDispatchToProps)(NewTrackForm);
