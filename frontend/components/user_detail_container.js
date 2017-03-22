import { connect } from 'react-redux';

import { getUser, clearUser } from '../actions/user_actions';
import { clearTracks } from '../actions/track_actions';
import UserDetail from './user_detail';


const mapStateToProps = ({ session, errors, user, tracks }) => ({
  currentUser: session.currentUser,
  user: user,
  tracks: tracks
});

const mapDispatchToProps = dispatch => ({
  getUser: id => dispatch(getUser(id)),
  clearUser: () => dispatch(clearUser()),
  clearTracks: () => dispatch(clearTracks())
});

export default connect(mapStateToProps, mapDispatchToProps)(UserDetail);
