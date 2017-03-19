import React from 'react';

class TrackDetail extends React.Component {
  constructor(props) {
    super(props);
    this.props.getTrack(this.props.params.trackId);
  }

  render () {
    if (this.props.track.title) {
      return (
        <section id="track-detail">
          <section className="track-detail-billboard">
            <ul className="track-detail-billboard-0">
              <li>
                <ul className="track-detail-billboard-1">
                  <li><i className="fa fa-play fa-2x" aria-hidden="true"></i></li>
                  <li>
                    <ul className="track-detail-billboard-2">
                      <li className="track-detail-billboard-title">{ this.props.track.title }</li>
                      <li className="track-detail-billboard-username">{ this.props.track.user.username }</li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <img
                  src={ this.props.track.album_artwork_url }
                  className="track-detail-album-artwork"></img>
              </li>
            </ul>
          </section>
          <p>{ this.props.track.title }</p>
          <p>{ this.props.track.release_date }</p>
          <p>{ this.props.track.description }</p>
          <p>{ this.props.track.genre }</p>
          <p>{ this.props.track.user.username }</p>
        </section>
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
