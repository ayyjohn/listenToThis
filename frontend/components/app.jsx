import React from 'react';
import ReactHowler from 'react-howler';

import NavBarContainer from './nav_bar_container';
import PlayerContainer from './player_container';

const App = ({ children }) => (
  <div id="app">
    <NavBarContainer/>
    { children }
    <PlayerContainer />
  </div>
);

export default App;
