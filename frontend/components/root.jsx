import React from 'react';
import { hashHistory, IndexRoute, Route, Router } from 'react-router';
import { Provider } from 'react-redux';

import LandingPageContainer from './landing_page_container';
import NewTrackFormContainer from './new_track_form_container';
import SplashPageContainer from './splash_page_container';
import TrackDetailContainer from './track_detail_container';
import UserDetailContainer from './user_detail_container';

const Root = ({ store }) => (
  <Provider store={ store }>
    <Router history={ hashHistory }>
      <Route path="/welcome" component={ SplashPageContainer } />
      <Route path="/listen" component={ LandingPageContainer } />
      <Route path="/user/:id" component={ UserDetailContainer } />
      <Route path="/upload" component={ NewTrackFormContainer } />
      <Route path="/tracks/:id" component={ TrackDetailContainer } />
    </Router>
  </Provider>
);

export default Root;
