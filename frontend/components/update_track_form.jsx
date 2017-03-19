import React from 'react';
import { withRouter } from 'react-router';

class UpdateTrackForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      release_date: "",
      genre: "",
      description: "",
      user_id: this.props.currentUser.id,
      album_artwork: "https://s3-us-west-1.amazonaws.com/listentothis-dev/no_album.png",
      album_artwork_url: "https://s3-us-west-1.amazonaws.com/listentothis-dev/no_album.png",
      mp3_file: "",
      upload_complete: false
    };

    this.props.getTrack(this.props.params.trackId)
      .then(res => this.setState({
        title: `${res.track.title}`,
        genre: `${res.track.genre}`,
        description: `${res.track.description}`,
        release_date: `${res.track.release_date}`,
        album_artwork_url: `${res.track.album_artwork_url}`,
        album_artwork: `${res.track.album_artwork}`,
        mp3_file: `${res.track.mp3_file}`,
      }));

    this.updateAlbumArtwork = this.updateAlbumArtwork.bind(this);
    this.updateMP3 = this.updateMP3.bind(this);
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
    let formData = new FormData();
    formData.append("track[title]", this.state.title);
    formData.append("track[release_date]", this.state.release_date);
    formData.append("track[genre]", this.state.genre);
    formData.append("track[description]", this.state.description);
    formData.append("track[user_id]", this.state.user_id);
    formData.append("track[album_artwork]", this.state.album_artwork);
    formData.append("track[mp3_file]", this.state.mp3_file);
    this.props.createTrack(formData);
  }

  updateMP3(event) {
    let mp3 = event.currentTarget.files[0];
    this.setState({ mp3_file: mp3 });
  }

  updateAlbumArtwork(event) {
    let artwork = event.currentTarget.files[0];
    let fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({ album_artwork: artwork, album_artwork_url: fileReader.result });
    };

    if (artwork) {
      fileReader.readAsDataURL(artwork);
    }
  }

  cancelAndGoBack(event) {
    event.preventDefault();
    this.props.router.push("/");
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
          <label className="new-mp3-label">Choose a song to upload
          <input
            name="new-mp3"
            className="new-mp3"
            onChange={ this.updateMP3 }
            type="file" />
          </label>
        </section>
        <form className="new-track-form">
          <ul className="new-track-form-0">
            <li>
              <h1 className="new-track-form-info-track-info">Track info</h1>
            </li>
            <ul className="new-track-form-1">
              <li className="choose-album-artwork">
                <label className="choose-album-artwork-label"><i className="fa fa-camera" aria-hidden="true"></i>Update image
                  <input
                    className="choose-album-artwork-input"
                    type="file"
                    onChange={ this.updateAlbumArtwork }/>
                </label>
                  <img
                    src={ this.state.album_artwork_url }
                    className="new-track-album-artwork"/>
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
