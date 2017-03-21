import { connect } from 'react-redux';

import Player from './player';
import { selectMP3s } from '../reducers/selectors';

const mapStateToProps = ({ queue }) => ({
  track: queue.tracks[queue.index],
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Player);
