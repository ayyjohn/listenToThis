import React from 'react';
import ReactHowler from 'react-howler';

class Player extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.tracks.length > 0) {
      return (
        <footer className="music-player">
          <ReactHowler
            className="music-player"
            src={ this.props.tracks }
            playing={ false } />
        </footer>
      );
    }
    else {
      return <div className="howler"></div>;
    }
  }
}

export default Player;