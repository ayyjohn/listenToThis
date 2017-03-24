import React from 'react';
import ReactHowler from 'react-howler';

class Player extends React.Component {
  constructor(props) {
    super(props);

    this.handleToggle = this.handleToggle.bind(this);
    this.handleOnLoad = this.handleOnLoad.bind(this);
    this.handleOnEnd = this.handleOnEnd.bind(this);
    this.handleOnPlay = this.handleOnPlay.bind(this);
    this.renderSeekPos = this.renderSeekPos.bind(this);
    this.handleLoopToggle = this.handleLoopToggle.bind(this);
    this.handleSkipForwards = this.handleSkipForwards.bind(this);
    this.handleSkipBackwards = this.handleSkipBackwards.bind(this);
    this.formatDuration = this.formatDuration.bind(this);
    this.formatSeek = this.formatSeek.bind(this);
    this.getCurrentSong = this.getCurrentSong.bind(this);
    this.getNextSong = this.getNextSong.bind(this);
    this.getPreviousSong = this.getPreviousSong.bind(this);
    this.interval = null;
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.queue.length > 0) {
      this.setState({
        index: nextProps.index,
        queue: nextProps.queue,
        playing: nextProps.playing,
        loop: false,
        mute: false,
        volume: 1.0,
        html5: true,
      });
    }
    if (this.props.index !== -1 && nextProps.index !== this.props.index) {
      this.setState({
        loaded: false,
        playing: true
      });
      this.props.updatePlaying(true);
      // if (this.player) {
      //   this.player.stop();
      //   this.player.play();
      // }
    }
  }

  componentWillUnmount() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  handleSkipForwards() {
    let index = this.state.index;
    if (this.state.index < this.state.queue.length - 1) {
      this.setState({
        index: this.state.index + 1
      });
      this.props.updateIndex(index + 1);
      this.props.updateId(this.getNextSong().id);
    }
  }

  handleSkipBackwards() {
    let index = this.state.index;
    if (this.state.seek > 6) {
      this.player.stop();
      this.player.play();
    }
    else {
      if (this.state.index > 0) {
        this.setState({
          index: this.state.index - 1
        });
        this.props.updateIndex(index - 1);
        this.props.updateId(this.getPreviousSong().id);
      }
    }
  }

  handleToggle() {
    this.setState({
      playing: !this.state.playing
    });
    this.props.updatePlaying(!this.state.playing);
  }

  handleOnLoad() {
    this.setState({
      loaded: true,
      duration: this.player.duration()
    });
    this.renderSeekPos();
    if (this.interval) {
      clearInterval(this.interval);
    }
    this.interval = setInterval(this.renderSeekPos, 1000);
  }

  handleOnPlay() {
    this.setState({
      playing: true
    });
  }

  handleOnEnd() {
    if (this.state.index < this.state.queue.length) {
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

  renderSeekPos() {
    this.setState({
      seek: this.player.seek()
    });
  }

  formatDuration() {
    if (this.state.loaded) {
      let songLength = Math.round(this.state.duration);
      let mins = Math.floor(songLength / 60);
      let secs = songLength % 60;
      if (secs < 10) { secs = `0${secs}`; }
      return `${mins}:${secs}`;
    }
    else {
      return "";
    }
  }

  formatSeek() {
    if (this.state.loaded) {
      let currentTime = Math.floor(this.state.seek);
      let mins = Math.floor(currentTime / 60);
      let secs = currentTime % 60;
      if (secs < 10) { secs = `0${secs}`; }
      return `${mins}:${secs}`;
    }
    else {
      return "";
    }
  }

  getCurrentSong() {
    return this.state.queue[this.state.index];
  }

  getPreviousSong() {
    return this.state.queue[this.state.index - 1];
  }

  getNextSong() {
    return this.state.queue[this.state.index + 1];
  }

  render() {
    if (this.props.queue.length > 0) {
      return (
        <footer className="music-player">
          <section className="player-content-and-buttons">
            <ReactHowler
              src={ this.getCurrentSong().mp3_file_url }
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
                  className="player-volume-controller"
                  type="range"
                  min='0'
                  max='1'
                  step='.05'
                  value={ this.state.volume }
                  onChange={ e =>  this.setState({ volume: parseFloat(e.target.value) }) } />
                Volume
              </label>
            </section>
            <section className="player-song-info">
              <img
                src={ this.getCurrentSong().album_artwork_url }
                className="player-album-artwork-mini"></img>
              <div className="player-song-title-and-user">
                <p>{ this.getCurrentSong().title }</p>
                <p>{ this.getCurrentSong().user.username }</p>
              </div>
            </section>
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
