import React from 'react';
import { withRouter } from 'react-router';

class SignUpForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: ""};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.guestLogin = this.guestLogin.bind(this);
  }

  redirectIfLoggedIn() {
    if (this.props.currentUser) {
      this.props.router.push("/listen");
    }
  }

  componentDidUpdate() {
    this.redirectIfLoggedIn();
  }

  update(field) {
    return event => this.setState({
      [field]: event.currentTarget.value
    });
  }

  guestLogin(event) {
    event.preventDefault();
    this.setState({
      username: "guest",
      password: "password"
    });
    setTimeout(() => this.props.logIn(this.state), 0);
  }

  handleSubmit(event) {
    event.preventDefault();
    const user = this.state;
    this.props.signUp(user);
  }

  renderErrors() {
    return(
      <ul>
        { this.props.errors.map( (error, index) => (
          <li className="signup-error" key={`error-${index}`}>{error}</li>
        ))}
      </ul>
    );
  }

  render() {
    return(
      <form className="signup-form" onSubmit={this.handleSubmit}>
        <input
          className="signup-text-input"
          type="text"
          value={this.state.username}
          placeholder="username"
          onChange={this.update("username")} />
        <input
          className="signup-text-input"
          type="password"
          value={this.state.password}
          placeholder="password"
          onChange={this.update("password")} />
        <div className="signup-errors">
          { this.renderErrors() }
        </div>
        <input className="signup-submit" type="submit" value="Sign Up" />
        <button className="guest-login" onClick={ this.guestLogin }>Demo</button>
      </form>
    );
  }
}

export default withRouter(SignUpForm);
