import { connect } from 'react-redux';
import { logOut } from '../actions/session_actions';
import { receiveSearchParam } from '../actions/search_actions';
import NavBar from './nav_bar';

const mapStateToProps = ({ session, searchParam }) => ({
  currentUser: session.currentUser,
  searchParam: searchParam
});

const mapDispatchToProps = dispatch => ({
  logOut: () => dispatch(logOut()),
  updateSearchParam: searchParam => dispatch(receiveSearchParam(searchParam))
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
