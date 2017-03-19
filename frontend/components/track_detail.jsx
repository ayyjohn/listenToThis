import React from 'react';
import { Link } from 'react-router';

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
            <section className="track-detail-billboard-0">
                <section className="track-detail-billboard-1">
                  <i className="fa fa-play fa-2x" aria-hidden="true"></i>
                    <ul className="track-detail-billboard-2">
                      <li><Link
                        to={`/users/${this.props.track.user.user_id}`}
                        className="track-detail-billboard-username">{ this.props.track.user.username }
                      </Link></li>
                      <li><h1 className="track-detail-billboard-title">{ this.props.track.title }</h1></li>
                    </ul>
                </section>
                <section className="track-detail-billboard-3">
                  <section className="track-detail-billboard-4">
                    <h1 className="track-detail-billboard-4-release-date">{this.props.track.release_date}</h1>
                    <h1 className="track-detail-billboard-4-genre"># {this.props.track.genre}</h1>
                  </section>
                  <img
                    src={ this.props.track.album_artwork_url }
                    className="track-detail-album-artwork"></img>
                </section>
            </section>
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
