import { connect } from 'react-redux';

import CommentIndex from './comment_index';
import { createComment,
         getComments,
         removeComment } from '../actions/comment_actions';

const mapStateToProps = ({ track, session, errors }) => ({
  errors: errors.comments,
  track: track,
  track_id: track.id,
  user: track.user,
  comments: track.comments,
  currentUser: session.currentUser
});

const mapDispatchToProps = dispatch => ({
  createComment: comment => dispatch(createComment(comment)),
  removeComment: id => dispatch(removeComment(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentIndex);
