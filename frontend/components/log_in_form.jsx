import React from 'react';

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

  handleSubmit(event) {
    event.preventDefault();
    const user = this.state;
    this.props.logIn(user);
  }

  renderErrors() {
    return(
      <ul>
        { this.props.errors.map( (error, index) => (
          <li key={`error-${index}`}>{error}</li>
        ))}
      </ul>
    );
  }

  guestLogin(event) {
    event.preventDefault();
    this.setState({
      username: "guest",
      password: "password"
    });
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <label>Username:
          <input
            type="text"
            value={this.state.username}
            onChange={this.update("username")} />
        </label>
        <br/>
        <label>Password:
          <input
            type="password"
            value={this.state.password}
            onChange={this.update("password")} />
        </label>
        <br/>
        <button onClick={ this.guestLogin }>Demo</button>
        <input type="submit" value="Log In" />
      </form>
    );
  }
}

export default LogInForm;
