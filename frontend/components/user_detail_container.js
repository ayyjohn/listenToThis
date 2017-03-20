import { connect } from 'react-redux';

import { getUser } from '../actions/user_actions';
import UserDetail from './user_detail';

const mapStateToProps = ({ session, errors, user }) => ({
  currentUser: session.currentUser,
  user: user
});

const mapDispatchToProps = dispatch => ({
  getUser: id => dispatch(getUser(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserDetail);
