import React from 'react';
import { withRouter } from 'react-router';

class LandingPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      searchParam: ""
    };
    this.props.getTracks(this.state.searchParam);
  }

  render() {
    return(
        <div>
          <h1>Listen To This!!</h1>
          <h4>Welcome, { this.props.currentUser.username }</h4>
          <button onClick={ this.props.logOut }>Log Out</button>
        </div>
      );
  }

  componentWillReceiveProps(nextProps) {
    this.ensureLoggedIn(nextProps);
  }

  ensureLoggedIn(props) {
    if (!props.currentUser) {
      this.props.router.push("/welcome");
    }
  }

  shouldComponentUpdate(nextProps) {
    return Boolean(nextProps.currentUser);
  }

}
export default withRouter(LandingPage);
