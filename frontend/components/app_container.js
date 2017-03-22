import { connect } from 'react-redux';

import { clearQueue } from '../actions/queue_actions';
import App from './app';

const mapDispatchToProps = dispatch => ({
  clearQueue: () => dispatch(clearQueue())
});

export default connect(null, mapDispatchToProps)(App);
