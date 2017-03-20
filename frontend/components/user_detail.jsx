import React from 'react';
import { Link } from 'react-router';

import TrackIndexContainer from './track_index_container';

class UserDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: this.props.routeParams.userId
    };
    this.props.getUser(this.props.params.userId);
  }

  render() {
    if (this.props.user.username) {
      return (
        <section id="user-detail">
          <section className="user-detail-billboard">
            <img src={ this.props.user.avatar_url }></img>
            <h1>{ this.props.user.username }</h1>
          </section>
          <h1 className="user-tracks-header">Tracks</h1>
          <section className="user-detail-section-1">
            <TrackIndexContainer searchParam={ this.state.userId } />
            <section className="user-detail-bio">
              <h1>{this.props.user.bio}</h1>
            </section>
          </section>
        </section>
      );
    }
    else {
      return (
        <div></div>
      );
    }
  }

}

export default UserDetail;
