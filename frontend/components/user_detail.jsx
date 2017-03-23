import React from 'react';
import { Link } from 'react-router';

import TrackIndexContainer from './track_index_container';

class UserDetail extends React.Component {
  constructor(props) {
    super(props);
    this.props.getUser(this.props.params.userId);
    this.renderUserLocation = this.renderUserLocation.bind(this);
    this.renderUserBio = this.renderUserBio.bind(this);
    this.renderUpdateLink = this.renderUpdateLink.bind(this);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.routeParams.userId !== this.props.routeParams.userId) {
      this.props.getUser(newProps.routeParams.userId);
    }
  }

  componentWillUnmount() {
    this.props.clearUser();
    this.props.clearTracks();
  }

  renderUserLocation() {
    if (this.props.user.location) {
      return <h1 className="user-detail-billboard-location">{ this.props.user.location }</h1>;
    }
    else {
      return <div></div>;
    }
  }

  renderUserBio() {
    if (this.props.user.bio) {
      return (
        <section className="user-detail-bio">
          <p className="user-detail-bio-header">Bio</p>
          <p>{ this.props.user.bio }</p>
        </section>
      );
    }
    else {
      return <div></div>;
    }
  }

  renderUpdateLink() {
    if (this.props.user.id !== this.props.currentUser.id) {
      return <div></div>;
    }
    else {
      return (
        <Link
          to={`/users/${ this.props.user.id }/update`}
          className="user-detail-edit-link">Update</Link>
      );
    }
  }

  render() {
    if (this.props.user.username) {
      return (
        <section id="user-detail">
          <section className="user-detail-billboard">
            <img
              className="user-detail-avatar"
              src={ this.props.user.avatar_url }></img>
            { this.renderUpdateLink() }
            <section className="user-detail-1">
              <h1 className="user-detail-billboard-username">{ this.props.user.username }</h1>
              { this.renderUserLocation() }
            </section>
            { this.renderUserBio() }
          </section>
          <section className="user-tracks-header">
            <h1 className="user-tracks-header">Tracks</h1>
          </section>
          <TrackIndexContainer
            className="user-detail-track-list" searchParam={ this.props.routeParams.userId } />
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

// <section className="user-detail-bio">
//   <h1>Bio</h1>
//   <h1>{this.props.user.bio}</h1>
// </section>
