import React from 'react';

import NavBarContainer from './nav_bar_container';

const App = ({ children }) => (
  <div id="app">
    <NavBarContainer/>
    { children }
  </div>
);

export default App;
