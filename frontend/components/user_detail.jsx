import React from 'react';
import { Link } from 'react-router';

import TrackIndexContainer from './track_index_container';

class UserDetail extends React.Component {
  constructor(props) {
    super(props);
    this.props.getUser(this.props.params.userId);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.routeParams.userId !== this.props.routeParams.userId) {
      this.props.getUser(newProps.routeParams.userId);
    }
  }

  componentWillUnmount() {
    this.props.clearUser();
  }

  render() {
    if (this.props.user.username) {
      return (
        <section id="user-detail">
          <section className="user-detail-billboard">
            <img
              className="user-detail-avatar"
              src={ this.props.user.avatar_url }></img>
            <h1
              className="user-detail-billboard-username">{ this.props.user.username }</h1>
          </section>
          <h1 className="user-tracks-header">Tracks</h1>
          <section className="user-detail-section-1">
            <TrackIndexContainer searchParam={ this.props.routeParams.userId } />
            <section className="user-detail-bio">
              <h1>{this.props.user.bio}</h1>
            </section>
          </section>
        </section>
      );
    }
    else {
      return (
        <div className="empty-user-detail"></div>
      );
    }
  }

}

export default UserDetail;
