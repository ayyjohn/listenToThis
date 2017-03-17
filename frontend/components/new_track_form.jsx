import React from 'react';

class NewTrackForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      date: this.getCurrentDate(),
      genre: null,
      user_id: this.props.currentUser.id,
      album_artwork: null,
      album_artwork_url: "https://s3-us-west-1.amazonaws.com/listentothis-dev/no_album.png",
      mp3_file: null,
    };
    this.updateAlbumArtwork = this.updateAlbumArtwork.bind(this);
    this.updateMP3 = this.updateMP3.bind(this);
  }

  update(field) {
    return event => this.setState({
      [field]: event.currentTarget.value
    });
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
    debugger;
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
            placeholder="title" />
          <input
            type="text"
            placeholder="genre" />
          <textarea
            placeholder="describe your track"></textarea>
          <button>Cancel</button>
          <button>Save</button>
        </form>
      </div>
    );
  }
}

export default NewTrackForm;
