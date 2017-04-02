# ListenToThis
[Live Version](http://www.listentothis.media)

ListenToThis is a full stack web application made for people who love to find new music and who love to share what they've found. It uses Ruby on Rails with Postgres for a backend to store links to songs on AWS and the frontend is curated using React.js following Redux flow. ListenToThis was inspired by the idea that many good streaming sites currently do not have a good community for discovery and their algorithms are generally not particularly good at helping a user branch out. ListenToThis provides a constant stream of music being uploaded to sample as well as pages for each song where the uploader and commenters can point future listeners to music that they think others would like. It runs because it is held up by a community of users who all enjoy the feeling of sharing music that they love with others.

### Features
* Ability to upload, view, edit, and delete songs
* Continuous playback between pages
* User profiles with lists of tracks uploaded by that user
* User authentication and login session that persists through refresh
* Ability to update your profile
* Comments on songs to facilitate exploring
* Interactive player with pause/play/skip buttons and a progress bar
* Splash page with animated modals for login and signup
* Custom domain name through Google Domains and hosting on Heroku

### Technologies Used
* React.js
* Redux
* Ruby on Rails
* PostgreSQL
* BCrypt (for storing users' password information)
* [paperclip][paperclip] (for storing user avatars and mp3s with AWS)
* [figaro][figaro] (for managing AWS information)
* [react-howler][react-howler] (for playing music)
* [react-modal][react-modal] (for the splash page forms)

[react-howler]: https://github.com/thangngoc89/react-howler
[react-modal]: https://github.com/reactjs/react-modal
[figaro]: https://rubygems.org/gems/figaro/
[paperclip]: https://rubygems.org/gems/paperclip/

## Feature Implementation Highlights

### Continuous Music Playback with Queues
![player_and_playing](https://s3-us-west-1.amazonaws.com/listentothis-dev/playback.gif)

The music player shows up immediately on playing a song, and retains whatever the next song to play was at that moment. This means that until the user actually tries to play a new set of songs the next and back buttons will navigate through the queue that they initially clicked on, the same as on Google Music or Spotify. This is accomplished by giving each track in the list a `populateQueue` function that closes over what the queue was at that point in time, as well as the index of the track in that queue. This way, when the player is initialized, it has the index of the song it should start at, and if that song is NOT the first song in the queue, the back button will skip back to the previous song, even if the previous song was never played.

```javascript
<ul className="track-index">
  {tracks.map( (track, index) => <TrackIndexItem
    populateQueue={ () => this.props.populateQueue(this.props.tracks, index) }
    key={`track-${track.id}`}
    track={ track }
    index={ index }
    queue={ this.props.queue }
    updatePlaying={ this.props.updatePlaying }
    updateId={ () => this.props.updateId(track.id) }/>)}
</ul>
```

In addition, to ensure that the page knows exactly which song is playing, the updateId function shown above also closes over the ID of the clicked song so that it can push out an action to the reducer and conditionally render a play or pause button if the track's ID matches which song is currently playing.

```javascript
renderPlayPause() {
  if (this.props.queue.id === this.props.track.id && this.props.queue.playing) {
    return <i className="fa fa-pause fa-lg" aria-hidden="true"></i>;
  }
  else {
    return <i className="fa fa-play fa-lg" aria-hidden="true"></i>;
  }
}
```

### Live Preview of Uploaded Album Artwork
![live_preview](https://s3-us-west-1.amazonaws.com/listentothis-dev/upload.gif)

When uploading a track it only makes sense that the user would be able to tell what photo they're uploading. With MP3s, the file name is usually descriptive enough, but often times photos names are much less descriptive, and the last thing that a user wants is to upload the wrong album artwork. The upload form on ListenToThis provides a previewed image by parsing the file immediately using `fileReader`, in addition to the storage on AWS once the track is actually submitted.

```javascript
<label className="choose-album-artwork-label"><i className="fa fa-camera" aria-hidden="true"></i>Update image
  <input
    className="choose-album-artwork-input"
    type="file"
    onChange={ this.updateAlbumArtwork }/>
</label>
  <img
    src={ this.state.album_artwork_url }
    className="new-track-album-artwork"/>
```

```javascript
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
```
## Future Plans
### Waveforms
Since the site is styled after SoundCloud the styling feels a bit empty without the classic SoundCloud waveforms. I plan to use a waveform generator to parse songs on upload and store the waveform in the database in the tracks table. Then on display all tracks will show their waveform in the index and on their detail page. In addition, I would like to make this waveform the background of a progress bar that fills synchronously with the playback of the current song similar to how SoundCloud does.

### Search
The sites navigation currently relies on the previously uploaded tracks list, and therefore if a user has not uploaded a song within the most recent tracks, their page will not be readily available unless you know their ID. This could be fixed by having infinite scroll on the recent uploads page, but in addition it would be nice to be able to search for tracks by the name of the user that uploaded them or the title of the track, or the genre you feel like browsing. The tracks index already takes in a search param, so this could be implemented by linking the search param to global state and then the track index would only return the n most recent songs that fit the query.

### Music Webs
To better facilitate exploration users will have the ability to create links between songs/artists they like, and these links will create a visual network with songs as nodes, connected by the links as straight line segments. The closer two artists/songs, the more that link has been made by users, implying a stronger connection and a higher probability that liking one will imply liking the other.
