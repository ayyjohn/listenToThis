import React from 'react';
import { withRouter } from 'react-router';

class UpdateUserForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      location: "",
      bio: "",
      avatar: "",
    };
    this.props.getUser(this.props.params.userId)
      .then( res => {
        if (res.user.id !== this.props.currentUser.id) {
          this.props.router.push(`/users/${this.props.user.id}`);
        }
        else {
          this.setState({
            username: `${res.user.username}`,
            location: res.user.location ? `${res.user.location}` : "",
            bio: res.user.bio ? `${res.user.bio}` : "",
            avatar: `${res.user.avatar_url}`,
          });
        }});
    this.cancelAndGoBack = this.cancelAndGoBack.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillUnmount() {
    this.props.clearUser();
  }

  update(field) {
    return event => this.setState({
      [field]: event.currentTarget.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.updateUser(this.state, this.props.params.userId)
      .then(() => this.props.router.push(`/users/${this.props.user.id}`));
  }

  cancelAndGoBack(event) {
    event.preventDefault();
    this.props.router.push(`/users/${this.props.user.id}`);
  }

  // renderErrors() {
  //   return(
  //     <ul>
  //       { this.props.errors.map( (error, index) => (
  //         <li className="new-track-error" key={`error-${index}`}>{error}</li>
  //       ))}
  //     </ul>
  //   );
  // }

  render() {
    return (
      <div className="upload-form">
        <section className="choose-a-song">
          <h1 className="upload-form-tagline">Update your Info</h1>
        </section>
        <form className="new-track-form">
          <ul className="new-track-form-0">
            <li>
              <h1 className="new-track-form-info-track-info">User info</h1>
            </li>
            <ul className="new-track-form-1">
              <li className="choose-album-artwork">
                  <img
                    src={ this.state.avatar }
                    className="update-track-album-artwork"/>
              </li>
              <ul className="new-track-form-2">
                <li className="new-track-form-title">
                  <p>Profile Photo</p>
                  <input
                    type="text"
                    value={this.state.avatar}
                    className="name-your-track"
                    placeholder="Link us to a photo of you"
                    onChange={ this.update("avatar") } />
                </li>
                <li>
                  <p>Location</p>
                  <input
                    value={this.state.location}
                    type="text"
                    placeholder="Where are you from?"
                    onChange={ this.update("location") } />
                </li>
                <li>
                  <p className="update-user-bio-header">Bio</p>
                  <textarea
                    value={this.state.bio}
                    className="describe-your-track"
                    placeholder="Tell us about yourself"
                    onChange={ this.update("bio") }>
                  </textarea>
                </li>
              </ul>
            </ul>
            <ul className="new-track-cancel-and-save">
              <li>
                <button
                  className="new-track-save-button"
                  onClick={ this.handleSubmit }>Save</button>
              </li>
              <li>
                <button
                  className="new-track-cancel-button"
                  onClick={ this.cancelAndGoBack }>Cancel</button>
              </li>
            </ul>
          </ul>
        </form>
      </div>
    );
  }
}

export default UpdateUserForm;
