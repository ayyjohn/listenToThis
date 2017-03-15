import React from 'react';
import { hashHistory, IndexRoute, Route, Router } from 'react-router';
import { Provider } from 'react-redux';

import App from './app';

const Root = ({ store }) => (
  <Provider store={ store }>
    <Router history={ hashHistory }>
      <Route path="/" component={ App } />
    </Router>
  </Provider>
);
