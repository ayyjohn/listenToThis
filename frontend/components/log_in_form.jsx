import React from 'react';
import { withRouter } from 'react-router';

class LogInForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "" };
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
    setTimeout(() => this.props.logIn(this.state), 500);
  }

  handleSubmit(event) {
    event.preventDefault();
    const user = this.state;
    this.props.logIn(user);
  }

  renderErrors() {
    return(
      <ul>
        { this.props.errors.map( (error, index) => (
          <li className="login-error" key={`error-${index}`}>{error}</li>
        ))}
      </ul>
    );
  }


  render() {
    return(
      <form className="login-form" onSubmit={this.handleSubmit}>
        <input
          className="login-text-input"
          type="text"
          tabindex="1"
          value={this.state.username}
          placeholder="username"
          onChange={this.update("username")} />
        <input
          className="login-text-input"
          type="password"
          tabindex="2"
          placeholder="password"
          value={this.state.password}
          onChange={this.update("password")} />
        <div className="login-errors">
          { this.renderErrors() }
        </div>
        <input className="login-submit" type="submit" tabindex="3" value="Log In" />
        <button className="guest-login" onClick={ this.guestLogin }>Demo</button>
      </form>
    );
  }
}

export default withRouter(LogInForm);
