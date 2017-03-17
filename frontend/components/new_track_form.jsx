import React from 'react';
import { withRouter } from 'react-router';

class NewTrackForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      release_date: this.getCurrentDate(),
      genre: null,
      description: "",
      user_id: this.props.currentUser.id,
      album_artwork: null,
      album_artwork_url: "https://s3-us-west-1.amazonaws.com/listentothis-dev/no_album.png",
      mp3_file: null,
      upload_complete: false
    };

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

  getCurrentDate() {
    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth() + 1;
    let yyyy = today.getFullYear();

    if (dd < 10) { dd = '0' + dd; }
    if (mm < 10) { mm = '0' + mm; }

    return (`${yyyy}/${mm}/${dd}`);
  }

  render() {
    return (
      <div>
        <header className="navBar">
        </header>
        <section>
          <h1>Spread the Music</h1>
          <label> Choose an MP3 file
          <input
            onChange={ this.updateMP3 }
            type="file" />
          </label>
        </section>
        <form className="new-track-form">
          <label>Upload Album Artwork
            <input
              type="file"
              onChange={ this.updateAlbumArtwork }/>
            <img src={ this.state.album_artwork_url } />
          </label>
          <input
            type="text"
            placeholder="title"
            onChange={ this.update("title") } />
          <input
            type="text"
            placeholder="genre"
            onChange={ this.update("genre") } />
          <textarea
            placeholder="describe your track"
            onChange={ this.update("description") }></textarea>
          <button
            onClick={ this.cancelAndGoBack }>Cancel</button>
          <button onClick={ this.handleSubmit }>Save</button>
          { this.renderErrors() }
        </form>
      </div>
    );
  }
}

export default withRouter(NewTrackForm);
