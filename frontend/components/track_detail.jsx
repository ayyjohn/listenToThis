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
          <section className="track-detail-center" >
            <section className="track-detail-add-comment-area">
              <section className="track-detail-add-comment-box">
                <img
                  src="https://s3-us-west-1.amazonaws.com/listentothis-dev/no_user.jpg"
                  className="track-detail-add-comment-user-picture"></img>
                <input
                  className="track-detail-new-comment"
                  type="text"
                  placeholder="What did you think of the song?">
                </input>
              </section>
            </section>
            <section className={this.props.track.user.user_id === this.props.currentUser.id ? "track-detail-edit-and-delete" : "track-detail-edit-and-delete-hidden" }>
              <Link
                to={`/tracks/${this.props.params.trackId}/update`}
                className="track-detail-edit-button">Edit</Link>
              <button
                className="track-detail-delete-button">Delete</button>
            </section>
          </section>
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
