import React from 'react';
import { Link } from 'react-router';

class UserDetail extends React.Component {
  constructor(props) {
    super(props);
    this.props.getUser(this.props.params.userId);
  }

  render() {
    return (
      <div>

      </div>
    );
  }

}

export default UserDetail;
