import { connect } from 'react-redux';

import { updateUser, getUser } from '../actions/user_actions';

import UpdateUserForm from './update_user_form';

const mapStateToProps = ({ session, user }) => ({
  currentUser: session.currentUser,
  user: user
});

const mapDispatchToProps = dispatch => ({
  getUser: id => dispatch(getUser(id)),
  updateUser: (user, id) => dispatch(updateUser(user, id))
});

export default connect(mapStateToProps, mapDispatchToProps)(UpdateUserForm);
