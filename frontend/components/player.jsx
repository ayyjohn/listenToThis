import React from 'react';
import ReactHowler from 'react-howler';

class Player extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      src: this.props.track,
      playing: true,
      loop: false,
      mute: false,
      volume: 1.0,
      html5: true,
      loaded: false
    };
    this.handleToggle = this.handleToggle.bind(this);
    this.handleOnLoad = this.handleOnLoad.bind(this);
    this.handleOnEnd = this.handleOnEnd.bind(this);
    this.handleOnPlay = this.handleOnPlay.bind(this);
    this.handleStop = this.handleStop.bind(this);
    this.renderSeekPos = this.renderSeekPos.bind(this);
    this.handleLoopToggle = this.handleLoopToggle.bind(this);
    this.handleMuteToggle = this.handleMuteToggle.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      src: nextProps.track
    });
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
  }

  handleOnEnd() {
    this.setState({
      playing: false
    });
  }

  handleStop() {
    this.player.stop();
    this.setState({
      playing: false
    });
    this.renderSeekPos();
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

  render() {
    if (this.props.track) {
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
          <button onClick={ this.handleToggle }>
            { this.state.playing ? 'Pause' : "Play" }
          </button>
          <button onClick={ this.handleStop }>
            Stop
          </button>
          <p>{ this.state.loaded ? 'Loaded' : 'Loading...' }</p>
          <label>
            Loop:
            <input type="checkbox"
              checked={ this.state.loop }
              onChange={ this.handleLoopToggle } />
          </label>
          <label>
            Mute:
            <input
              type="checkbox"
              checked={ this.state.mute }
              onChange={ this.handleMuteToggle } />
          </label>
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
        </footer>
      );
    }
    else {
      return <div></div>;
    }
  }
}

export default Player;
