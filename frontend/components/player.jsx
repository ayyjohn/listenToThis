import React from 'react';
import ReactHowler from 'react-howler';

class Player extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: this.props.index,
      src: "",
      playing: true,
      loop: false,
      mute: false,
      volume: 1.0,
      html5: true,
      loaded: false,
      tracks: this.props.tracks
    };
    this.handleToggle = this.handleToggle.bind(this);
    this.handleOnLoad = this.handleOnLoad.bind(this);
    this.handleOnEnd = this.handleOnEnd.bind(this);
    this.handleOnPlay = this.handleOnPlay.bind(this);
    this.renderSeekPos = this.renderSeekPos.bind(this);
    this.handleLoopToggle = this.handleLoopToggle.bind(this);
    this.handleMuteToggle = this.handleMuteToggle.bind(this);
    this.handleSkipForwards = this.handleSkipForwards.bind(this);
    this.handleSkipBackwards = this.handleSkipBackwards.bind(this);
    this.formatDuration = this.formatDuration.bind(this);
    this.formatSeek = this.formatSeek.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.tracks.length > 0) {
      this.setState({
        src: nextProps.tracks[nextProps.index].mp3_file_url,
        index: nextProps.index,
        tracks: nextProps.tracks,
        track: nextProps.tracks[nextProps.index]
      });
    }
  }

  handleSkipForwards() {
    debugger;
    if (this.state.index < this.state.tracks.length - 1) {
      this.setState({
        index: this.state.index + 1,
        src: this.props.tracks[this.state.index].mp3_file_url
      });
    }
  }

  handleSkipBackwards() {
    if (this.state.index > 0) {
      this.setState({
        index: this.state.index - 1,
        src: this.props.tracks[this.state.index].mp3_file_url
      });
    }
  }

  handleToggle() {
    this.setState({
      playing: !this.state.playing
    });
  }

  handleOnLoad() {
    this.setState({
      loaded: true,
      duration: this.player.duration()
    });
  }

  handleOnPlay() {
    this.setState({
      playing: true
    });
    setInterval(() => this.renderSeekPos(), 1000);
  }

  handleOnEnd() {
    if (this.state.index < this.state.tracks.length) {
      debugger;
      this.handleSkipForwards();
    }
    else {
      this.setState({
        playing: false
      });
    }
  }

  handleLoopToggle() {
    this.setState({
      loop: !this.state.loop
    });
  }

  handleMuteToggle() {
    this.setState({
      mute: !this.state.mute
    });
  }

  renderSeekPos() {
    this.setState({
      seek: this.player.seek()
    });
  }

  formatDuration() {
    let songLength = Math.round(this.state.duration);
    let mins = Math.floor(songLength / 60);
    let secs = songLength % 60;
    if (secs < 10) { secs = `0${secs}`; }
    return `${mins}:${secs}`;
  }

  formatSeek() {
    let currentTime = Math.floor(this.state.seek);
    let mins = Math.floor(currentTime / 60);
    let secs = currentTime % 60;
    if (secs < 10) { secs = `0${secs}`; }
    return `${mins}:${secs}`;
  }

  render() {
    if (this.props.tracks.length > 0) {
      return (
        <footer className="music-player">
          <ReactHowler
            src={ this.state.src }
            playing={ this.state.playing }
            onLoad={ this.handleOnLoad }
            onPlay={ this.handleOnPlay }
            onEnd={ this.handleOnEnd }
            loop={ this.state.loop }
            mute={ this.state.mute }
            volume={ this.state.volume }
            ref={(ref) => (this.player = ref)} />
          <button onClick={ this.handleSkipBackwards }>
            <i className="fa fa-step-backward" aria-hidden="true"></i>
          </button>
          <button onClick={ this.handleToggle }>
            { this.state.playing ? <i className="fa fa-pause fa-lg" aria-hidden="true"></i> : <i className="fa fa-play fa-lg" aria-hidden="true"></i> }
          </button>
          <button onClick={ this.handleSkipForwards }>
            <i className="fa fa-step-forward" aria-hidden="true"></i>
          </button>
          <p>{ this.state.loaded ? '' : 'Loading...' }</p>
          <i  className="fa fa-repeat"
              aria-hidden="true"
              checked={ this.state.loop }
              onChange={ this.handleLoopToggle }>
          </i>
          <section className="player-time-info">
            <p className="player-current-time">{ this.formatSeek() }</p>
            <progress
              className="player-progress-bar"
              value={ this.state.seek }
              max={ this.state.duration }></progress>
            <p className="player-song-length">{ this.formatDuration() }</p>
          </section>
          <section className="player-volume">
            <label>
              <input
                type="range"
                min='0'
                max='1'
                step='.05'
                value={ this.state.volume }
                onChange={ e =>  this.setState({ volume: parseFloat(e.target.value) }) } />
              Volume: { this.state.volume }
            </label>
          </section>
          <section className="player-song-info">
            <img
              src={ this.state.track.album_artwork_url }
              className="player-album-artwork-mini"></img>
            <div className="player-song-title-and-user">
              <p>{ this.state.track.title }</p>
              <p>{ this.state.track.user.username }</p>
            </div>
          </section>
        </footer>
      );
    }
    else {
      return <div></div>;
    }
  }
}

export default Player;
