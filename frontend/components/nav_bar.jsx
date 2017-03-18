import React from 'react';
import { Link, withRouter } from 'react-router';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <header className="nav-bar">
        <ul className="nav-bar-list">
          <li id="nav-bar-logo">
            <Link to="/listen" >
            <img id="nav-bar-logo-image" src="https://s3-us-west-1.amazonaws.com/listentothis-dev/white_headphones.png" />
            <h1 className="nav-bar-tagline">Listen To This</h1>
            </Link>
          </li>
          <li>
            <Link to="/listen">Home</Link>
          </li>
          <li>
            <input
              className="nav-bar-search"
              type="text"
              placeholder="Search by song name, artist, or genre"
              ></input>
            <i className="fa fa-search" aria-hidden="true"></i>
          </li>
          <li>
            <Link to="/upload">Upload</Link>
          </li>
          <li>
            <Link to={`/users/${ this.props.currentUser.id }`} >{ this.props.currentUser.username }</Link>
          </li>
          <li>
            <button
              className="nav-bar-log-out"
              onClick={ this.props.logOut }>Log Out</button>
          </li>
        </ul>
      </header>
    );
  }
}

export default NavBar;
