import React from 'react';
import { withRouter } from 'react-router';

class LandingPage extends React.Component {

  constructor(props) {
    super(props);
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

}
export default withRouter(LandingPage);
