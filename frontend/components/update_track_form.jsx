import React from 'react';
import { withRouter } from 'react-router';

class UpdateTrackForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      genre: "",
      description: "",
      album_artwork_url: "https://s3-us-west-1.amazonaws.com/listentothis-dev/no_album.png",
    };

    this.props.getTrack(this.props.params.trackId)
      .then(res => {
        if (res.track.user.user_id !== this.props.currentUser.id) {
          this.props.router.push(`/tracks/${this.props.track.id}`);
        }
        else {
          this.setState({
            title: `${res.track.title}`,
            genre: `${res.track.genre}`,
            description: `${res.track.description}`,
            album_artwork_url: `${res.track.album_artwork_url}`
          });
        }});

    this.cancelAndGoBack = this.cancelAndGoBack.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return event => this.setState({
      [field]: event.currentTarget.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.updateTrack(this.state, this.props.params.trackId)
      .then(() => this.props.router.push(`/tracks/${this.props.track.id}`));
  }

  cancelAndGoBack(event) {
    event.preventDefault();
    this.props.router.push(`/tracks/${this.props.track.id}`);
  }

  renderErrors() {
    return(
      <ul>
        { this.props.errors.map( (error, index) => (
          <li className="new-track-error" key={`error-${index}`}>{error}</li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="upload-form">
        <section className="choose-a-song">
          <h1 className="upload-form-tagline">Update Your Track</h1>
        </section>
        <form className="new-track-form">
          <ul className="new-track-form-0">
            <li>
              <h1 className="new-track-form-info-track-info">Track info</h1>
            </li>
            <ul className="new-track-form-1">
              <li className="choose-album-artwork">
                  <img
                    src={ this.state.album_artwork_url }
                    className="update-track-album-artwork"/>
              </li>
              <ul className="new-track-form-2">
                <li className="new-track-form-title">
                  <p>Title</p>
                  <input
                    type="text"
                    value={this.state.title}
                    className="name-your-track"
                    placeholder="Name your track"
                    onChange={ this.update("title") } />
                </li>
                <li>
                  <p>Genre</p>
                  <input
                    value={this.state.genre}
                    type="text"
                    placeholder="Genre"
                    onChange={ this.update("genre") } />
                </li>
                <li>
                  <p>Description</p>
                  <textarea
                    value={this.state.description}
                    className="describe-your-track"
                    placeholder="Describe your track"
                    onChange={ this.update("description") }>
                  </textarea>
                </li>
                <li className="new-track-errors">
                  { this.renderErrors() }
                </li>
              </ul>
            </ul>
            <ul className="new-track-cancel-and-save">
              <li>
                <button
                  className="new-track-cancel-button"
                  onClick={ this.cancelAndGoBack }>Cancel</button>
              </li>
              <li>
                <button
                  className="new-track-save-button"
                  onClick={ this.handleSubmit }>Save</button>
              </li>
            </ul>
          </ul>
        </form>
      </div>
    );
  }
}

export default withRouter(UpdateTrackForm);
