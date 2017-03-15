import React from 'react';
import { hashHistory, IndexRoute, Route, Router } from 'react-router';
import { Provider } from 'react-redux';

import LandingPage from './landing_page';
{/* import NewTrackFormContainer from './new_track_form_container'; */}
import SplashPage from './splash_page';
{/* import TrackDetailContainer from './track_detail_container';
import UserDetailContainer from './user_detail_container'; */}

const Root = ({ store }) => (
  <Provider store={ store }>
    <Router history={ hashHistory }>
      <Route path="/welcome" component={ SplashPage } />
      <Route path="/listen" component={ LandingPage } />
      {/*
      <Route path="/user/:id" component={ UserDetailContainer } />
      <Route path="/upload" component={ NewTrackFormContainer } />
      <Route path="/tracks/:id" component={ TrackDetailContainer } />
      */}
    </Router>
  </Provider>
);

export default Root;
