import React from 'react';

class TrackDetail extends React.Component {
  constructor(props) {
    super(props);
    this.props.getTrack(this.props.params.trackId);
  }

  render () {
    if (this.props.track.title) {
      return (
        <div>
          <p>{ this.props.track.title }</p>
          <p>{ this.props.track.release_date }</p>
          <p>{ this.props.track.description }</p>
          <p>{ this.props.track.genre }</p>
          <p>{ this.props.track.user.username }</p>
        </div>
      );
    }
    else {
      return (
        <div></div>
      );
    }
  }
}

export default TrackDetail;
