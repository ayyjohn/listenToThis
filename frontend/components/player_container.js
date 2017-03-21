import { connect } from 'react-redux';

import Player from './player';
import { selectMP3s } from '../reducers/selectors';
import { updateIndex } from '../actions/queue_actions';

const mapStateToProps = ({ queue }) => ({
  queue: queue.tracks,
  index: queue.index
});

const mapDispatchToProps = dispatch => ({
  updateIndex: index => dispatch(updateIndex(index))
});

export default connect(mapStateToProps, mapDispatchToProps)(Player);
