import { connect } from 'react-redux';

import { getUser, clearUser } from '../actions/user_actions';
import UserDetail from './user_detail';

const mapStateToProps = ({ session, errors, user }) => ({
  currentUser: session.currentUser,
  user: user
});

const mapDispatchToProps = dispatch => ({
  getUser: id => dispatch(getUser(id)),
  clearUser: () => dispatch(clearUser())
});

export default connect(mapStateToProps, mapDispatchToProps)(UserDetail);
