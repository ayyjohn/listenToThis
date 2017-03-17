import { connect } from 'react-redux';
import TrackIndex from './track_index';

import { getTracks } from '../actions/track_actions';

const mapStateToProps = ({ tracks }) => ({
  tracks: tracks
});

const mapDispatchToProps = dispatch => ({
  getTracks: (searchParam) => dispatch(getTracks(searchParam))
});

export default connect(mapStateToProps, mapDispatchToProps)(TrackIndex);
