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
    }, 100);
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
          tabIndex="1"
          value={this.state.username}
          placeholder="username"
          onChange={this.update("username")} />
        <input
          className="signup-text-input"
          type="password"
          tabIndex="2"
          value={this.state.password}
          placeholder="password"
          onChange={this.update("password")} />
        <div className="signup-errors">
          { this.renderErrors() }
        </div>
        <input className="signup-submit" type="submit" tabIndex="3" value="Sign Up" />
        <button className="guest-login" tabIndex="4" onClick={ this.guestLogin }>Demo</button>
      </form>
    );
  }
}

export default withRouter(SignUpForm);
