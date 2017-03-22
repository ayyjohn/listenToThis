import React from 'react';
import ReactHowler from 'react-howler';

import NavBarContainer from './nav_bar_container';
import PlayerContainer from './player_container';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillUnmount() {
    this.props.clearQueue();
  }

  render() {
    return (
      <div id="app">
        <NavBarContainer/>
        { this.props.children }
        <PlayerContainer />
      </div>
    );
  }
}

export default App;
