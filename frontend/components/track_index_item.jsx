import React from 'react';
import { Link } from 'react-router';

class TrackIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.populateQueueAndUpdateId = this.populateQueueAndUpdateId.bind(this);
    this.renderPlayPause = this.renderPlayPause.bind(this);
  }

  populateQueueAndUpdateId() {
    this.props.populateQueue();
    this.props.updateId();
  }

  renderPlayPause() {
    if (this.props.queue.id === this.props.track.id && this.props.queue.playing) {
      return <i className="fa fa-pause fa-lg" aria-hidden="true"></i>;
    }
    else {
      return <i className="fa fa-play fa-lg" aria-hidden="true"></i>;
    }
  }

  render() {
    return(
        <ul className="track-index-item">
          <li className="track-index-item">
            <Link
              to={`/tracks/${this.props.track.id}`}
              className="track-index-item-album-artwork-link" >
            <img
              className="track-index-item-album-artwork"
              src={ this.props.track.album_artwork_url }>
            </img>
          </Link>
          </li>
          <li onClick={ this.populateQueueAndUpdateId }>
            { this.renderPlayPause() }
          </li>
          <ul className="track-index-item-information">
            <li>
              <Link
                to={`/users/${this.props.track.user.user_id}`}
                className="track-index-username">
                { this.props.track.user.username }
              </Link>
            </li>
            <li>
              <Link
                to={`/tracks/${this.props.track.id}`}
                className="track-index-track-title">
                { this.props.track.title }
              </Link>
            </li>
          </ul>
        </ul>
    );
  }
}
export default TrackIndexItem;
