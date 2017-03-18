import React from 'react';

import TrackIndexItem from './track_index_item';

class TrackIndex extends React.Component {
  constructor(props) {
    super(props);
    this.props.getTracks("asdfasdfasdf");
  }

  render() {
    const { tracks } = this.props;
    if (this.props.tracks.length === 0) {
      return (<div></div>);
    }
    else {
      return (
        <div>
          <ul>
            {tracks.map( track => <TrackIndexItem key={`track-${track.id}`} track={ track }/>)}
          </ul>
        </div>
      );
    }

  }
}
export default TrackIndex;
