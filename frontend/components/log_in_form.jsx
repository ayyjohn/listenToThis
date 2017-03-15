import React from 'react';

class LogInForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "" };
    this.handleSubmit = this.handleSubmit.bind(this);
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

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.username}
          onChange={this.update("username")} />
        <br/>
        <input
          type="text"
          value={this.state.password}
          onChange={this.update("password")} />
        <br/>
        <input type="submit" value="Log In" />
      </form>
    );
  }
}

export default LogInForm;
