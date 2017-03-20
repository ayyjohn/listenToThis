import React from 'react';

import TrackIndexItem from './track_index_item';

class TrackIndex extends React.Component {
  constructor(props) {
    super(props);
    this.props.getTracks(this.props.searchParam);
  }

  render() {
    const { tracks } = this.props;
    if (this.props.tracks.length === 0) {
      return (<div></div>);
    }
    else {
      return (
        <ul className="track-index">
          {tracks.map( track => <TrackIndexItem key={`track-${track.id}`} track={ track }/>)}
        </ul>
      );
    }

  }
}
export default TrackIndex;
