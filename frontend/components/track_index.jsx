import React from 'react';

import TrackIndexItem from './track_index_item';
import { selectMP3s } from '../reducers/selectors';

class TrackIndex extends React.Component {
  constructor(props) {
    super(props);
    this.props.getTracks(this.props.searchParam);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.searchParam !== this.props.searchParam) {
      this.props.getTracks(newProps.searchParam);
    }
  }

  render() {
    const { tracks } = this.props;
    if (this.props.tracks.length === 0) {
      return (<div></div>);
    }
    else {
      return (
        <ul className="track-index">
          {tracks.map( (track, index) => <TrackIndexItem
            populateQueue={ () => this.props.populateQueue(this.props.tracks, index) }
            key={`track-${track.id}`}
            track={ track }
            index={ index }/>)}
        </ul>
      );
    }

  }
}
export default TrackIndex;
