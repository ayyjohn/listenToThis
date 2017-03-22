import React from 'react';
import { Link } from 'react-router';

const CommentIndexItem = ({ comment }) => (
  <section>
    <img className="comment-avatar"
         src={ comment.avatar_url }>
    </img>
    <p className="comment-body">{ comment.body }</p>
    <p className="comment-username">{ comment.username }</p>
  </section>
);

export default CommentIndexItem;
