import React from 'react';
import ReactDOM from 'react-dom';

import configureStore from './store/store';
import Root from './components/root';
// import { logIn, logOut, signUp } from './actions/session_actions';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  const store = configureStore();
  window.store = store;
  ReactDOM.render(<Root store={ store } />, root);
});

// window.logIn = logIn;
// window.logOut = logOut;
// window.signUp = signUp;
