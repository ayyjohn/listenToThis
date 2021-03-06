import { connect } from 'react-redux';

import { getTracks, clearTracks } from '../actions/track_actions';
import { logOut } from '../actions/session_actions';
import LandingPage from './landing_page';

const mapStateToProps = ({ session, tracks, searchParam }) => ({
  currentUser: session.currentUser,
  tracks: tracks,
  searchParam: searchParam
});

const mapDispatchToProps = dispatch => ({
  logOut: () => dispatch(logOut()),
  getTracks: (searchParam) => dispatch(getTracks(searchParam)),
  clearTracks: () => dispatch(clearTracks())
});

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);
