import React from 'react';
import ReactDOM from 'react-dom';

import configureStore from './store/store';
// import { logIn, logOut, signUp } from './actions/session_actions';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  const store = configureStore();
  window.store = store;
  ReactDOM.render(<h1>Listen to This!</h1>, root);
});

// window.logIn = logIn;
// window.logOut = logOut;
// window.signUp = signUp;
