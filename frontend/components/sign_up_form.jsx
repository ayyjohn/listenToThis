import React from 'react';

class SignUpForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: ""};
    this.handleSubmit = this.handleSubmit.bind(this);
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
    this.props.signUp(user);
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
        { this.renderErrors() }
        <br/>
        <input type="submit" value="Sign Up" />
      </form>
    );
  }
}

export default SignUpForm;
