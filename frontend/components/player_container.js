import { connect } from 'react-redux';

import Player from './player';
import { selectMP3s } from '../reducers/selectors';
import { updateIndex, updatePlaying } from '../actions/queue_actions';

const mapStateToProps = ({ queue }) => ({
  queue: queue.tracks,
  index: queue.index,
  playing: queue.playing
});

const mapDispatchToProps = dispatch => ({
  updateIndex: index => dispatch(updateIndex(index)),
  updatePlaying: playing => dispatch(updatePlaying(playing))
});

export default connect(mapStateToProps, mapDispatchToProps)(Player);
