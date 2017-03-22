import * as CommentAPIUtil from '../util/comment_api_util';
import { clearErrors,
         receiveCommentErrors } from './error_actions';

export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS';

export const createComment = comment => dispatch => (
  CommentAPIUtil.createComment(comment)
    .then( newComment => dispatch(receiveComment(newComment)),
    error => dispatch(receiveCommentErrors(error.responseJSON)))
);

export const removeComment = id => dispatch => (
  CommentAPIUtil.removeComment(id)
);

export const getComments = trackId => dispatch => (
  CommentAPIUtil.getComments(trackId)
    .then( comments => dispatch(receiveComments(comments)))
);

export const receiveComment = comment => ({
  type: RECEIVE_COMMENT,
  comment
});

export const receiveComments = comments => ({
  type: RECEIVE_COMMENTS,
  comments
});
