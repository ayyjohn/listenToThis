import { connect } from 'react-redux';

import { logIn, signUp } from '../actions/session_actions';
import SignUpForm from './sign_up_form';

const mapStateToProps = ({ session, errors }) => ({
  currentUser: session.currentUser,
  errors: errors.signUp
});

const mapDispatchToProps = dispatch => ({
  logIn: user => dispatch(logIn(user)),
  signUp: user => dispatch(signUp(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);
