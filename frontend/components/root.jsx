import React from 'react';
import { hashHistory, IndexRedirect, IndexRoute, Route, Router } from 'react-router';
import { Provider } from 'react-redux';

import AppContainer from './app_container';
import LandingPageContainer from './landing_page_container';
import LogInFormContainer from './log_in_form_container';
import NewTrackFormContainer from './new_track_form_container';
import SplashPage from './splash_page';
import SignUpFormContainer from './sign_up_form_container';
import TrackDetailContainer from './track_detail_container';
import UpdateTrackFormContainer from './update_track_form_container';
import UpdateUserFormContainer from './update_user_form_container';
import UserDetailContainer from './user_detail_container';

const Root = ({ store }) => {

  const _ensureLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (!currentUser) {
      replace('/welcome');
    }
  };

  const _redirectIfLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (currentUser) {
      replace('/listen');
    }
  };

  return (
    <Provider store={ store }>
      <Router history={ hashHistory }>
        <Route path="/welcome" component={ SplashPage } onEnter={ _redirectIfLoggedIn }/>
        <Route path="/" component={ AppContainer } onEnter={ _ensureLoggedIn } >
          <IndexRedirect to="/listen" />
          <Route path="/listen" component={ LandingPageContainer }/>
          <Route path="/upload" component={ NewTrackFormContainer }/>
          <Route path="/tracks/:trackId" component={ TrackDetailContainer }/>
          <Route path="/tracks/:trackId/update" component={ UpdateTrackFormContainer }/>
          <Route path="/users/:userId" component={ UserDetailContainer }/>
          <Route path="/users/:userId/update" component={ UpdateUserFormContainer }/>
        </Route>
      </Router>
    </Provider>
  );
};

export default Root;
