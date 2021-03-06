import React from 'react';
import { Link } from 'react-router';
import CommentIndexContainer from './comment_index_container';

class TrackDetail extends React.Component {
  constructor(props) {
    super(props);
    this.props.getTrack(this.props.params.trackId);
    this.deleteTrack = this.deleteTrack.bind(this);
    this.renderDeleteAndEdit = this.renderDeleteAndEdit.bind(this);
    this.addTrackToQueue = this.addTrackToQueue.bind(this);
    this.renderPlayPause = this.renderPlayPause.bind(this);
  }

  componentWillUnmount() {
    this.props.clearTrack();
  }

  deleteTrack() {
    this.props.removeTrack(this.props.params.trackId)
      .then(() => this.props.router.push("/listen"));
  }

  renderDeleteAndEdit() {
    if (this.props.track.user.user_id === this.props.currentUser.id) {
      return (
        <section className="track-detail-edit-and-delete">
          <Link
            to={`/tracks/${this.props.params.trackId}/update`}
            className="track-detail-edit-button">Edit</Link>
          <button
            onClick={ this.deleteTrack }
            className="track-detail-delete-button">Delete</button>
      </section>
    );
    }
    else {
      return <section className="track-detail-edit-and-delete"></section>;
    }
  }

  addTrackToQueue() {
    this.props.populateQueue([this.props.track], 0);
    this.props.updateId(this.props.track.id);
    if (this.props.queue.index !== -1) {
      this.props.updatePlaying(!this.props.queue.playing);
    }
  }


  renderPlayPause() {
    if (this.props.queue.id === this.props.track.id && this.props.queue.playing) {
      return <i className="fa fa-pause fa-2x" aria-hidden="true" onClick={ this.addTrackToQueue }></i>;
    }
    else {
      return <i className="fa fa-play fa-2x" aria-hidden="true" onClick={ this.addTrackToQueue }></i>;
    }
  }

  render () {
    if (this.props.track.title) {
      return (
        <section id="track-detail">
          <section className="track-detail-billboard">
            <section className="track-detail-billboard-0">
                <section className="track-detail-billboard-1">
                  { this.renderPlayPause() }
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
          <CommentIndexContainer />
          { this.renderDeleteAndEdit() }
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
