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
    let demoLogin = "guest_user123".split('');
    let demoPassword = "aLongerPass".split('');
    this.setState({
      username: "",
      password: ""
    });
    let interval = setInterval( () => {
      if (demoLogin.length) {
        this.setState({ username: this.state.username + demoLogin.shift()});
      }
      else if (demoPassword.length) {
        this.setState({ password: this.state.password + demoPassword.shift()});
      }
      else {
        clearInterval(interval);
        this.props.logIn(this.state);
      }
    }, 80);
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
          tabIndex="1"
          value={this.state.username}
          placeholder="username"
          onChange={this.update("username")} />
        <input
          className="login-text-input"
          type="password"
          tabIndex="2"
          placeholder="password"
          value={this.state.password}
          onChange={this.update("password")} />
        <div className="login-errors">
          { this.renderErrors() }
        </div>
        <input className="login-submit" type="submit" tabIndex="3" value="Log In" />
        <button className="guest-login" tabIndex="4" onClick={ this.guestLogin }>Demo</button>
      </form>
    );
  }
}

export default withRouter(LogInForm);
