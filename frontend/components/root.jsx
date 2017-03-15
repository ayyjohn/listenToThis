import React from 'react';
import { hashHistory, IndexRedirect, mIndexRoute, Route, Router } from 'react-router';
import { Provider } from 'react-redux';

import App from './app';
import LandingPageContainer from './landing_page_container';
{/* import NewTrackFormContainer from './new_track_form_container'; */}
import SplashPage from './splash_page';
import SignUpFormContainer from './sign_up_form_container';
import LogInFormContainer from './log_in_form_container';
{/* import TrackDetailContainer from './track_detail_container';
import UserDetailContainer from './user_detail_container'; */}

const Root = ({ store }) => (
  <Provider store={ store }>
    <Router history={ hashHistory }>
      <Route path="/" component={ App } >
        <Route path="/listen" component={ LandingPageContainer } />
        <Route path="/welcome" component={ SplashPage } />
        <Route path="/signup" component={ SignUpFormContainer } />
        <Route path="/login" component={ LogInFormContainer } />
      </Route>
      {/*
      <Route path="/user/:id" component={ UserDetailContainer } />
      <Route path="/upload" component={ NewTrackFormContainer } />
      <Route path="/tracks/:id" component={ TrackDetailContainer } />
      */}
    </Router>
  </Provider>
);

export default Root;
