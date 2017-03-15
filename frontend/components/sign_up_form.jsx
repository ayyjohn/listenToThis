import React from 'react';

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
    setTimeout(() => this.props.logIn(this.state), 500);
    {/* TODO actually log in*/}
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
          <li className="error" key={`error-${index}`}>{error}</li>
        ))}
      </ul>
    );
  }

  render() {
    return(
      <form className="signup-form" onSubmit={this.handleSubmit}>
        <input
          className="text-input"
          type="text"
          value={this.state.username}
          placeholder="username"
          onChange={this.update("username")} />
        <input
          className="text-input"
          type="password"
          value={this.state.password}
          placeholder="password"
          onChange={this.update("password")} />
        { this.renderErrors() }
        <input className="continue" type="submit" value="Sign Up" />
        <button className="continue" onClick={ this.guestLogin }>Demo</button>
      </form>
    );
  }
}

export default SignUpForm;
