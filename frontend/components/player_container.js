import { connect } from 'react-redux';

import Player from './player';
import { selectMP3s } from '../reducers/selectors';

const mapStateToProps = ({ queue }) => ({
  tracks: queue.tracks,
  index: queue.index
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Player);
