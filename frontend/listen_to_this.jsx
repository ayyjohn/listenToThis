import React from 'react';
import ReactDOM from 'react-dom';

import configureStore from './store/store';
import Root from './components/root';
// import { createTrack } from './actions/track_actions';
// import { logIn, logOut, signUp } from './actions/session_actions';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
  }
  else {
    store = configureStore();
  }
  window.store = store;
  ReactDOM.render(<Root store={ store } />, root);
});

// window.logIn = logIn;
// window.logOut = logOut;
// window.signUp = signUp;
// window.createTrack = createTrack;
