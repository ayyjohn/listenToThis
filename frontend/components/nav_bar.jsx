import React from 'react';
import { Link, withRouter } from 'react-router';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchParam: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.clearSearch = this.clearSearch.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.ensureLoggedIn(nextProps);
  }

  ensureLoggedIn(props) {
    if (!props.currentUser) {
      this.props.router.push("/welcome");
    }
  }

  componentWillUnmount() {
    this.props.updateSearchParam("");
  }

  shouldComponentUpdate(nextProps) {
    return Boolean(nextProps.currentUser);
  }

  handleChange(event) {
    this.setState({
      searchParam: event.currentTarget.value
    });
  }

  handleSubmit(event) {
    this.props.updateSearchParam(this.state.searchParam);
  }

  clearSearch() {
    this.props.updateSearchParam("");
    this.setState({
      searchParam: ""
    });
  }

  render() {
    return(
      <header className="nav-bar">
        <ul className="nav-bar-list">
          <li id="nav-bar-logo">
            <Link to="/listen"
              onClick={this.clearSearch}>
            <img id="nav-bar-logo-image" src="https://s3-us-west-1.amazonaws.com/listentothis-dev/white_headphones.png" />
            <h1 className="nav-bar-tagline">Listen To This</h1>
            </Link>
          </li>
          <li>
            <Link
              to="/listen"
              onClick={this.clearSearch}>Home</Link>
          </li>
          <li>
            <form onSubmit={this.handleSubmit}>
              <input
                className="nav-bar-search"
                type="text"
                placeholder="Search by song name or genre"
                value={this.state.searchParam}
                onChange={this.handleChange}
                ></input>
              <i className="fa fa-search" aria-hidden="true"></i>
              <input type="submit" value=""></input>
            </form>
          </li>
          <li>
            <Link
              to="/upload"
              onClick={this.clearSearch}>Upload</Link>
          </li>
          <li>
            <Link to={`/users/${ this.props.currentUser.id }`}
                  onClick={this.clearSearch}>{ this.props.currentUser.username }</Link>
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

export default withRouter(NavBar);
