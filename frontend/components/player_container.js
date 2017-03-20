import { connect } from 'react-redux';

import Player from './player';
import { selectMP3s } from '../reducers/selectors';

const mapStateToProps = ({ tracks }) => ({
  tracks: selectMP3s(tracks)
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Player);
