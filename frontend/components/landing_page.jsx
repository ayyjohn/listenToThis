import React from 'react';
import { withRouter } from 'react-router';

import TrackIndexContainer from './track_index_container';

class LandingPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      searchParam: ""
    };
  }

  render() {
    return(
      <section id="most-recent">
        <h1 id="new-tracks-header">Newly Uploaded Tracks</h1>
        <TrackIndexContainer />
      </section>
      );
  }

  componentWillReceiveProps(nextProps) {
    this.ensureLoggedIn(nextProps);
  }

  ensureLoggedIn(props) {
    if (!props.currentUser) {
      this.props.router.push("/welcome");
    }
  }

  shouldComponentUpdate(nextProps) {
    return Boolean(nextProps.currentUser);
  }

}
export default withRouter(LandingPage);
